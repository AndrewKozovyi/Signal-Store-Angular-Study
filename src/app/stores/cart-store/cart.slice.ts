import {CartItem} from '../../models/ticket.model';

export interface CartSlice {
  readonly cartTickets: CartItem[];
  readonly isCartOpen: boolean;
}

export const initialState: CartSlice = {
  cartTickets: [],
  isCartOpen: false
}
