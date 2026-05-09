import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as selectors from './selectors/cart.selectors';
import { CartActions } from './actions/cart.actions';
import {CartItem, Ticket} from '../models/ticket.model';

@Injectable({ providedIn: 'root' })
export class CartStore {
  private store = inject(Store);

  cartCount = this.store.selectSignal(selectors.selectCartCount);
  totalSum = this.store.selectSignal(selectors.selectTotalSum);
  isCartOpen = this.store.selectSignal(selectors.selectIsCartOpen);
  cartTickets = this.store.selectSignal(selectors.selectCartTickets);

  toggleCart(val: boolean) {
    this.store.dispatch(CartActions.toggleCart({ isOpen: val }));
  }

  addTicketToCart(ticket: CartItem | Ticket) {
    this.store.dispatch(CartActions.addTicket({ ticket }));
  }

  removeTicketFromCart(ticket: CartItem) {
    this.store.dispatch(CartActions.removeTicket({ id: ticket.id }));
  }

  deleteTicketFromCart(ticket: CartItem) {
    this.store.dispatch(CartActions.deleteTicket({ id: ticket.id }));
  }

  checkout() {
    this.store.dispatch(CartActions.checkout());
  }
}
