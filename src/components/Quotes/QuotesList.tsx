import { FC } from "react";
import { useParams } from "react-router-dom";
import { IQuote } from "../../types";
import QuoteItem from "./QuoteItem";

interface Props {
  quotes: IQuote[];
  categories: { [key: string]: string};
  onDelete: (id: string) => void
}

const QuotesList: FC<Props> = ({ quotes, categories, onDelete }) => {
  const { id } = useParams();

  return (
    <>
      <h4>{id ? categories[id] : 'All'}</h4>
      <div className="row gap-3">
        {quotes.length ? (
          quotes.map((quote) => (
            <QuoteItem key={quote.id} quote={quote} categories={categories} onQuoteDelete={() => onDelete(quote.id)} />
          ))
        ) : (
          <p>There's no quotes</p>
        )}
      </div>
    </>
  );
};

export default QuotesList;