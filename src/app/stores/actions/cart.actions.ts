import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {CartItem, Ticket} from '../../models/ticket.model';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Toggle Cart': props<{ isOpen: boolean }>(),
    'Add Ticket': props<{ ticket: Ticket | CartItem }>(),
    'Remove Ticket': props<{ id: string }>(),
    'Delete Ticket': props<{ id: string }>(),
    'Checkout': emptyProps(),
  }
});
