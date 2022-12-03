import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosApi from "../../axiosApi";
import Menu from "../../components/Menu/Menu";
import QuotesList from "../../components/Quotes/QuotesList";
import Spinner from "../../components/Spinner/Spinner";
import { IQuote, IQuotesList } from "../../types";

const CATEGORIES = {
  star_wars: "Star Wars",
  famous_people: "Famous people",
  saying: "Saying",
  humour: "Humour",
  motivational: "Motivational",
};

const Home = () => {
  const { category } = useParams();
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const [loading, setLoading] = useState(false);

  const getQuotes = useCallback(async (categoryParam: string = "") => {
    try {
      setLoading(true);
      const quotesResponse = await axiosApi.get<IQuotesList>(
        '/quotes.json?orderBy="category"&equalTo=' +
          (categoryParam && `"${categoryParam}"`)
      );
      if (!quotesResponse.data) return setQuotes([]);

      const quotes = Object.keys(quotesResponse.data).map((key) => ({
        ...quotesResponse.data[key],
        id: key,
      }));
      setQuotes(quotes);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void getQuotes(category);
  }, [getQuotes, category]);

  const deleteOneQuote = async (quoteId: string) => {
    try {
      setLoading(true);
      await axiosApi.delete(`/quotes/${quoteId}.json`);
      getQuotes(category);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row mt-3">
      <div className="col-5">
        <Menu categories={CATEGORIES} onClick={getQuotes} />
      </div>
      <div className="col-7">
        {loading ? (
          <Spinner />
        ) : (
          <QuotesList
            quotes={quotes}
            categories={CATEGORIES}
            onDelete={deleteOneQuote}
          />
        )}
      </div>
    </div>
  );
};

export default Home;