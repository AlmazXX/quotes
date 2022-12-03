import { useNavigate } from "react-router-dom";
import axiosApi from "../../axiosApi";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import { QuoteApi } from "../../types";

const Add = () => {
  const navigate = useNavigate();

  const createPost = async (quote: QuoteApi) => {
    try {
      // setLoading(true);
      await axiosApi.post("/quotes.json", quote);
      navigate("/");
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="row mt-3">
      <h4>Submit new quote</h4>
      <div className="col-6">
        <QuoteForm onSubmit={createPost} />
      </div>
    </div>
  );
};

export default Add;