import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {initialState} from './cart.slice';
import {Ticket} from '../../models/ticket.model';
import {addTicketToCart, toggleCart} from './cart.helper';
import {computed} from '@angular/core';

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => {
    const cartCount = computed(() => {
      let q = 0;
      store.cartTickets().map(t => q += t.quantity)
      return q
    });

    return {
      cartCount
    }
  }),
  withMethods(store => ({
    addTicketToCart: (ticket: Ticket) => patchState(store, addTicketToCart(ticket)),
    toggleCart: (isOpen: boolean) => patchState(store, toggleCart(isOpen)),
  }))
)
