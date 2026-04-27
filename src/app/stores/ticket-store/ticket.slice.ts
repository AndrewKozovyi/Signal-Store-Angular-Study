import {CartItem, Ticket} from '../../models/ticket.model';

export interface TicketsSlice {
  readonly tickets: Ticket[];
  readonly cartTickets: CartItem[];
  readonly currentTicketId: string;
  readonly isCartOpen: boolean;
  readonly filterText: string;
  readonly category: string;
}

export const initialState: TicketsSlice = {
  tickets: [],
  cartTickets: [],
  currentTicketId: '',
  isCartOpen: false,
  filterText: '',
  category: ''
}
