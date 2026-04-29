import {CartItem} from '../../models/ticket.model';

export interface CartSlice {
  readonly cartTickets: CartItem[];
  readonly isCartOpen: boolean;
  readonly totalSum: number;
}

export const initialState: CartSlice = {
  cartTickets: [],
  isCartOpen: false,
  totalSum: 0
}
