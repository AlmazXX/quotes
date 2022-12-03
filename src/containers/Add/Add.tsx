import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../axiosApi";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import Spinner from "../../components/Spinner/Spinner";
import { IQuoteApi } from "../../types";

const Add = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const createQuote = async (quote: IQuoteApi) => {
    try {
      setLoading(true);
      await axiosApi.post("/quotes.json", quote);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row mt-3">
      <h4>Submit new quote</h4>
      <div className="col-6">
        {loading ? <Spinner /> : <QuoteForm onSubmit={createQuote} />}
      </div>
    </div>
  );
};

export default Add;