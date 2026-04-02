import {CartItem, Ticket} from '../../models/ticket.model';

export interface TicketsSlice {
  readonly tickets: Ticket[];
  readonly cartTickets: CartItem[];
  readonly currentTicketId: string;
  readonly isCartOpen: boolean;
}

export const initialState: TicketsSlice = {
  tickets: [],
  cartTickets: [],
  currentTicketId: '',
  isCartOpen: false
}
