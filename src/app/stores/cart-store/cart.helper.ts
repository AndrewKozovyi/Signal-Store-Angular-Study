import {Ticket} from "../../models/ticket.model";
import {PartialStateUpdater} from "@ngrx/signals";
import {CartSlice} from "./cart.slice";

export function addTicketToCart(ticket: Ticket): PartialStateUpdater<CartSlice> {
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

export function toggleCart(isOpen: boolean): PartialStateUpdater<CartSlice> {
    return _ => ({
        isCartOpen: isOpen
    })
}
