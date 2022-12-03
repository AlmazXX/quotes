import { ChangeEvent, FC, FormEvent, useState } from "react";
import { IQuoteApi } from "../../types";

interface Props {
  existingQuote?: IQuoteApi;
  onSubmit: (post: IQuoteApi) => void;
}

const QuoteForm: FC<Props> = ({ existingQuote, onSubmit }) => {
  const [quote, setQuote] = useState<IQuoteApi>(
    existingQuote || {
      category: "",
      author: "",
      text: "",
    }
  );

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
          required
        >
          <option disabled value="">
            Please select a value!
          </option>
          <option value="star_wars">Star Wars</option>
          <option value="famous_people">Famous people</option>
          <option value="saying">Saying</option>
          <option value="humour">Humour</option>
          <option value="motivational">Motivational</option>
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
        {existingQuote ? "Edit" : "Submit"}
      </button>
    </form>
  );
};

export default QuoteForm;