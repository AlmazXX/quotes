import { ChangeEvent, FC, FormEvent, useState } from "react";
import { QuoteApi } from "../../types";

interface Props {
  onSubmit: (post: QuoteApi) => void;
}

const QuoteForm: FC<Props> = ({ onSubmit }) => {
  const [quote, setQuote] = useState<QuoteApi>({
    category: "",
    author: "",
    text: "",
  });

  const onQuoteChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setQuote((prev) => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(quote);
    setQuote((prev) => ({ ...prev, category: "", author: "", text: "" }));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-group mb-2">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          className="form-control"
          value={quote.category}
          onChange={onQuoteChange}
        >
          <option disabled value="">
            Please select a value!
          </option>
          <option value="Star Wars">Star Wars</option>
          <option value="Famous people">Famous people</option>
          <option value="Saying">Saying</option>
          <option value="Humour">Humour</option>
          <option value="Motivational">Motivational</option>
        </select>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          className="form-control"
          value={quote.author}
          onChange={onQuoteChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="text">Quote</label>
        <textarea
          name="text"
          id="text"
          className="form-control"
          value={quote.text}
          onChange={onQuoteChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default QuoteForm;