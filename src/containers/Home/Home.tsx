import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosApi from "../../axiosApi";
import Menu from "../../components/Menu/Menu";
import QuotesList from "../../components/Quotes/QuotesList";
import { IQuote, IQuotesList } from "../../types";

const CATEGORIES = {
  star_wars: "Star Wars",
  famous_people: "Famous people",
  saying: "Saying",
  humour: "Humour",
  motivational: "Motivational",
};

const Home = () => {
  const { id } = useParams();
  const [quotes, setQuotes] = useState<IQuote[]>([]);

  const getQuotes = useCallback(async (id: string = "") => {
    try {
      const quotesResponse = await axiosApi.get<IQuotesList>(
        '/quotes.json?orderBy="category"&equalTo=' + (id && `"${id}"`)
      );
      if (!quotesResponse.data) return setQuotes([]);

      const quotes = Object.keys(quotesResponse.data).map((key) => ({
        ...quotesResponse.data[key],
        id: key,
      }));
      setQuotes(quotes);
    } finally {
    }
  }, []);

  useEffect(() => {
    void getQuotes(id);
  }, [getQuotes, id]);

  const deleteOneQuote = async (quoteId: string) => {
    try {
      await axiosApi.delete(`/quotes/${quoteId}.json`);
      getQuotes(id);
    } finally {
    }
  };

  return (
    <div className="row mt-3">
      <div className="col-5">
        <Menu categories={CATEGORIES} onClick={getQuotes} />
      </div>
      <div className="col-7">
        <QuotesList
          quotes={quotes}
          categories={CATEGORIES}
          onDelete={deleteOneQuote}
        />
      </div>
    </div>
  );
};

export default Home;