export interface Ticket {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  place: string;
  imageUrl: string;
  price: number;
}

export interface CartItem {
  ticket: Ticket;
  quantity: number;
}
