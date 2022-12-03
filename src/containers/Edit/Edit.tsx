import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../../axiosApi";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import { IQuoteApi } from "../../types";

const Edit = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [quote, setQuote] = useState<IQuoteApi | null>(null);

  const getOneQuote = useCallback(async () => {
    try {
      const quoteResponse = await axiosApi.get(`quotes/${id}.json`);
      setQuote(quoteResponse.data);
    } finally {}
  }, [id])

  useEffect(() => {
    void getOneQuote();
  }, [getOneQuote])

  const editQuote = async (quote: IQuoteApi) => {
    try {
      // setLoading(true);
      await axiosApi.put(`/quotes/${id}.json`, quote);
      navigate("/");
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="row mt-3">
      <h4>Edit quote</h4>
      <div className="col-6">
        {quote && <QuoteForm onSubmit={editQuote} existingQuote={quote}/>}
      </div>
    </div>
  );
};

export default Edit;