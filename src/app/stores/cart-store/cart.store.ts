import {getState, patchState, signalStore, withComputed, withHooks, withMethods, withState} from '@ngrx/signals';
import {CartSlice, initialState} from './cart.slice';
import {CartItem, Ticket} from '../../models/ticket.model';
import {addTicketToCart, checkout, deleteTicketFromCart, removeTicketFromCart, toggleCart} from './cart.helper';
import {computed, effect} from '@angular/core';

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => {
    const cartCount = computed(() => {
      let q = 0;
      store.cartTickets().map(t => q += t.quantity)
      return q
    });
    const totalSum = computed(() => {
      let sum = 0;
      store.cartTickets().map(t => sum += t.price * t.quantity);
      return sum;
    })

    return {
      cartCount,
      totalSum
    }
  }),
  withMethods(store => ({
    toggleCart: (isOpen: boolean) => patchState(store, toggleCart(isOpen)),
    addTicketToCart: (ticket: Ticket | CartItem) => patchState(store, addTicketToCart(ticket)),
    removeTicketFromCart: (ticket: CartItem) => patchState(store, removeTicketFromCart(ticket.id)),
    deleteTicketFromCart: (ticket: CartItem) => patchState(store, deleteTicketFromCart(ticket.id)),
    checkout: () => patchState(store, checkout())
  })),
  withHooks({
    onInit(store) {
      const stateJSON = localStorage.getItem('cart');
      if (stateJSON) {
        const state = JSON.parse(stateJSON) as CartSlice;
        patchState(store, state)
      }

      effect(() => {
        const state = getState(store);
        const stateJSON = JSON.stringify(state);
        localStorage.setItem('cart', stateJSON)
      });
    }
  })
)
