import { FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { IQuote } from "../../types";

interface Props {
  quote: IQuote;
  categories: { [key: string]: string };
  onQuoteDelete: MouseEventHandler;
}

const QuoteItem: FC<Props> = ({ quote, categories, onQuoteDelete }) => {
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <p className="small float-sm-end m-0 text-muted">
            Category: <span>{categories[quote.category]}</span>
          </p>
          <h5 className="card-title">{quote.author}</h5>
          <p className="card-text">{quote.text}</p>
          <div className="d-flex gap-3 px-0 mb-3">
            <Link to={`/quotes/${quote.id}/edit`} className="btn btn-primary">Edit</Link>
            <button className="btn btn-danger" onClick={onQuoteDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteItem;