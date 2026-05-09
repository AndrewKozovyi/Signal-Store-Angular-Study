import { createFeature, createReducer, on } from '@ngrx/store';
import {TicketActions} from '../actions/ticket.actions';
import {Ticket} from '../../models/ticket.model';

export interface TicketsStore {
  readonly tickets: Ticket[];
  readonly currentTicketId: string;
  readonly filterText: string;
  readonly category: string;
}

export const initialState: TicketsStore = {
  tickets: [],
  currentTicketId: '',
  filterText: '',
  category: ''
}

export const ticketFeature = createFeature({
  name: 'ticket',
  reducer: createReducer(
    initialState,

    on(TicketActions.setCurrentTicketId, (state, { id }) => ({
      ...state,
      currentTicketId: id
    })),

    on(TicketActions.updateTextFilter, (state, { text }) => ({
      ...state,
      filterText: text
    })),

    on(TicketActions.updateCategoryFilter, (state, { category }) => ({
      ...state,
      category: category
    })),

    on(TicketActions.loadTicketsSuccess, (state, { tickets }) => ({
      ...state,
      tickets: tickets
    }))
  )
});
