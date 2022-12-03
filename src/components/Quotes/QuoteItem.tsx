import { FC } from "react";
import { Quote } from "../../types";

interface Props {
  quote: Quote;
}

const QuoteItem: FC<Props> = ({ quote }) => {
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <p className="small float-sm-end m-0 text-muted">
            Category: <span>{quote.category}</span>
          </p>
          <h5 className="card-title">{quote.author}</h5>
          <p className="card-text">{quote.text}</p>
          {/* <Link
            to={
              location.pathname === "/posts" ? `${post.id}` : `posts/${post.id}`
            }
            className="btn btn-primary"
          >
            Read more
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default QuoteItem;
