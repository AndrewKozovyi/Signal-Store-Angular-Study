import { createFeature, createReducer, on } from '@ngrx/store';
import {CartActions} from '../actions/cart.actions';
import {CartItem} from '../../models/ticket.model';

export interface CartStore {
  readonly cartTickets: CartItem[];
  readonly isCartOpen: boolean;
  readonly totalSum: number;
}

export const initialState: CartStore = {
  cartTickets: [],
  isCartOpen: false,
  totalSum: 0
}

export const cartFeature = createFeature({
  name: 'cart',
  reducer: createReducer(
    initialState,

    on(CartActions.toggleCart, (state, { isOpen }) => ({
      ...state,
      isCartOpen: isOpen
    })),

    on(CartActions.addTicket, (state, { ticket }) => {
      const ticketExists = state.cartTickets.find(t => t.id === ticket.id);

      if (ticketExists) {
        const updatedTickets = state.cartTickets.map(t =>
          t.id === ticket.id ? { ...t, quantity: t.quantity + 1 } : t
        );
        return { ...state, cartTickets: updatedTickets };
      }

      return {
        ...state,
        cartTickets: [
          ...state.cartTickets,
          {
            id: ticket.id,
            title: ticket.title,
            price: ticket.price,
            quantity: 1
          }
        ]
      };
    }),

    on(CartActions.removeTicket, (state, { id }) => {
      const ticketExists = state.cartTickets.find(t => t.id === id);

      if (!ticketExists) return state;

      if (ticketExists.quantity > 1) {
        return {
          ...state,
          cartTickets: state.cartTickets.map(t =>
            t.id === id ? { ...t, quantity: t.quantity - 1 } : t
          )
        };
      } else {
        return {
          ...state,
          cartTickets: state.cartTickets.filter(t => t.id !== id)
        };
      }
    }),

    on(CartActions.deleteTicket, (state, { id }) => {
      return {
        ...state,
        cartTickets: state.cartTickets.filter(t => t.id !== id)
      };
    }),

    on(CartActions.checkout, (state) => ({
      ...state,
      isCartOpen: false,
      cartTickets: []
    }))
  )
});
