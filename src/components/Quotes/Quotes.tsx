import { FC } from "react";
import { Quote } from "../../types";
import QuoteItem from "./QuoteItem";

interface Props {
  quotes: Quote[];
}

const Quotes: FC<Props> = ({ quotes }) => {
  return (
    <>
      <h4></h4>
      {quotes.length ? (
        quotes.map((quote) => <QuoteItem key={quote.id} quote={quote} />)
      ) : (
        <p>There's no quotes</p>
      )}
    </>
  );
};

export default Quotes;