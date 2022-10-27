export interface Stay {
  img: string;
  location: string;
  title: string;
  description: string;
  star: string;
  price: string;
  total: string;
  long: number;
  lat: number;
}
export interface StayProps {
  data: Stay;
}
