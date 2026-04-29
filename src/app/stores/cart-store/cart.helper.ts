import {CartItem, Ticket} from "../../models/ticket.model";
import {PartialStateUpdater} from "@ngrx/signals";
import {CartSlice} from "./cart.slice";

export function toggleCart(isOpen: boolean): PartialStateUpdater<CartSlice> {
  return _ => ({
    isCartOpen: isOpen
  })
}

export function addTicketToCart(ticket: Ticket | CartItem): PartialStateUpdater<CartSlice> {
    return state => {
        const ticketExists = state.cartTickets.find(t => t.id === ticket.id)

        if (ticketExists) {
            const updatedTickets = state.cartTickets.map(t =>
                t.id === ticket.id
                    ? { ...t, quantity: t.quantity + 1 }
                    : t
            );

            return { cartTickets: updatedTickets };
        }

        return {
            cartTickets: [...state.cartTickets,
                {
                    id: ticket.id,
                    title: ticket.title,
                    price: ticket.price,
                    quantity: 1
                }
            ]
        };
    }
}

export function removeTicketFromCart(ticketId: string): PartialStateUpdater<CartSlice> {
  return state => {
    const ticketExists = state.cartTickets.find(t => t.id === ticketId);

    if (!ticketExists) {
      return state;
    }

    if (ticketExists.quantity > 1) {
      return {
        cartTickets: state.cartTickets.map(t =>
          t.id === ticketId ? { ...t, quantity: t.quantity - 1 } : t
        )
      };
    } else {
      return {
        cartTickets: completeDelete(ticketId, state.cartTickets)
      };
    }
  };
}

export function deleteTicketFromCart(ticketId: string): PartialStateUpdater<CartSlice> {
  return state => {
    const ticketExists = state.cartTickets.find(t => t.id === ticketId);

    if (!ticketExists) {
      return state;
    }

    return {
      cartTickets: completeDelete(ticketId, state.cartTickets)
    };
  }
}

function completeDelete(ticketId: string, tickets: CartItem[]): CartItem[] {
  return tickets.filter(t => t.id !== ticketId)
}

export function checkout(): PartialStateUpdater<CartSlice> {
  return _ => ({
    isCartOpen: false,
    cartTickets: []
  })
}
