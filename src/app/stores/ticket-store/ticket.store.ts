import {patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState} from '@ngrx/signals';
import {initialState} from './ticket.slice';
import {computed, inject} from '@angular/core';
import {StateService} from '../../services/state.service';
import {addTicketToCart, setCurrentTicketId, toggleCart} from './ticket.helper';
import {Ticket} from '../../models/ticket.model';

export const TicketStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withProps(store => {
    const stateService = inject(StateService)

    return {
      stateService
    }
  }),
  withComputed((store) => {
    const currentTicket = computed(() => store.tickets().find(t => t.id === store.currentTicketId()));
    const cartCount = computed(() => {
      let q = 0;
      store.cartTickets().map(t => q += t.quantity)
      return q
    });

    return {
      currentTicket,
      cartCount
    }
  }),
  withMethods(store => ({
    setCurrentTicketId: (id: string) => patchState(store, setCurrentTicketId(id)),
    addTicketToCart: (ticket: Ticket) => patchState(store, addTicketToCart(ticket)),
    toggleCart: (isOpen: boolean) => patchState(store, toggleCart(isOpen))
  })),
  withHooks({
    onInit(store) {
      patchState(store, { tickets: store.stateService.getTickets()})
    }
  })
)
