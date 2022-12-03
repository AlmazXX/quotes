export interface IQuote {
  id: string;
  author: string;
  category: string;
  text: string;
}

export type IQuoteApi = Omit<IQuote, 'id'>

export interface IQuotesList {
  [id: string]: IQuoteApi;
}