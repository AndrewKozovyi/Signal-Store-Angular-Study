import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {Ticket} from '../../models/ticket.model';

export const TicketActions = createActionGroup({
  source: 'Ticket',
  events: {
    'Set Current Ticket Id': props<{ id: string }>(),
    'Update Text Filter': props<{ text: string }>(),
    'Update Category Filter': props<{ category: string }>(),
    'Load Tickets Success': props<{ tickets: Ticket[] }>(),
  }
});
