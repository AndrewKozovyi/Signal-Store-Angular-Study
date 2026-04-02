import {PartialStateUpdater} from '@ngrx/signals';
import {TicketsSlice} from './ticket.slice';
import {Ticket} from '../../models/ticket.model';


export function setCurrentTicketId(id: string): PartialStateUpdater<TicketsSlice> {
  return _ => ({
    currentTicketId: id
  })
}

export function addTicketToCart(ticket: Ticket): PartialStateUpdater<TicketsSlice> {
  return state => {
    const ticketExists = state.cartTickets.find(t => t.ticket.id === ticket.id)

    if (ticketExists) {
      return {
        cartTickets: state.cartTickets.map(t =>
          t.ticket.id === ticket.id
            ? { ...t, quantity: t.quantity + 1 }
            : t
        )
      };
    }

    return {
      cartTickets: [...state.cartTickets, { ticket, quantity: 1 }]
    };
  }
}

export function toggleCart(isOpen: boolean): PartialStateUpdater<TicketsSlice> {
  return _ => ({
    isCartOpen: isOpen
  })
}
