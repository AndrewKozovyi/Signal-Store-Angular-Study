export interface Ticket {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  place: string;
  imageUrl: string;
  price: number;
  category: string;
}

export interface CartItem {
  ticket: Ticket;
  quantity: number;
}

export interface CategoryItem {
  value: string;
  name: string;
}
