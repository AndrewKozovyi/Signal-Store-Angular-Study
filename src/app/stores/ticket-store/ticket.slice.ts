import {CartItem, Ticket} from '../../models/ticket.model';

export interface TicketsSlice {
  readonly tickets: Ticket[];
  readonly currentTicketId: string;
  readonly filterText: string;
  readonly category: string;
}

export const initialState: TicketsSlice = {
  tickets: [],
  currentTicketId: '',
  filterText: '',
  category: ''
}
