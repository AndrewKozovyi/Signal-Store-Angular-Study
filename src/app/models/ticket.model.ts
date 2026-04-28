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

export interface CategoryItem {
  value: string;
  name: string;
}

export type CartItem = Pick<Ticket, 'id' | 'title' | 'price'> & { quantity: number };
