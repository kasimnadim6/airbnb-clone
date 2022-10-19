export interface Card {
  img?: string;
  distance?: string;
  location?: string;
  title?: string;
  description?: string;
  btnText?: string;
}
export interface CardProps {
  data: Card;
}
