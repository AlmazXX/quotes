import { useCallback, useEffect, useState } from "react";
import axiosApi from "../../axiosApi";
import Quotes from "../../components/Quotes/Quotes";
import { Quote, QuotesList } from "../../types";

const CATEGORIES = [
  {title: 'Star Wars', id: 'star_wars'},
  {title: 'Famous people', id: 'famous_people'},
  {title: 'Saying', id: 'saying'},
  {title: 'Humour', id: 'humour'},
  {title: 'Motivational', id: 'motivational'},
]

const Home = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const getQuotes = useCallback(async (id: string = '') => {
    try {
      // setLoading(true);
      const quotesResponse = await axiosApi.get<QuotesList>(id ? `/quotes.json?orderBy="category"&equalTo=${id}` : '/quotes.json');
      if (!quotesResponse.data) return setQuotes([]);

      const quotes = Object.keys(quotesResponse.data)
        .map((key) => ({
          ...quotesResponse.data[key],
          id: key,
        }))
        setQuotes(quotes);
    } finally {
      // setLoading(false);
    }
  }, []);

  useEffect(() => {
    void getQuotes()
  }, [getQuotes]);

  return (
    <div className="row mt-3">
      <div className="col-5">Menu</div>
      <div className="col-7"><Quotes quotes={quotes}/></div>
    </div>
  );
};

export default Home;