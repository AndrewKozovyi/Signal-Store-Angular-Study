import { createSelector } from '@ngrx/store';
import {cartFeature} from '../reducers/cart.reducers';

export const { selectCartTickets, selectIsCartOpen } = cartFeature;

export const selectCartCount = createSelector(
  selectCartTickets,
  (tickets) => {
    const safeTickets = tickets || [];
    return safeTickets.reduce((total, item) => total + item.quantity, 0);  }
);

export const selectTotalSum = createSelector(
  selectCartTickets,
  (tickets) => {
    const safeTickets = tickets || [];
    return safeTickets.reduce((total, item) => total + (item.price * item.quantity), 0);  }
);
