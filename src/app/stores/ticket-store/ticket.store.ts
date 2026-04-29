import {
  getState,
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState
} from '@ngrx/signals';
import {initialState, TicketsSlice} from './ticket.slice';
import {computed, effect, inject} from '@angular/core';
import {StateService} from '../../services/state.service';
import {setCurrentTicketId, updateCategoryFilter, updateTextFilter} from './ticket.helper';
import {CartItem, CategoryItem, Ticket} from '../../models/ticket.model';
import {CartStore} from '../cart-store/cart.store';

export const TicketStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withProps(store => {
    const stateService = inject(StateService)
    const cartStore =  inject(CartStore)

    return {
      stateService,
      cartStore
    }
  }),
  withComputed((store) => {
    const currentTicket = computed(() => store.tickets().find(t => t.id === store.currentTicketId()));
    const categories = computed<CategoryItem[]>(() => {

      const uniqueNames = [...new Set(store.tickets().map(t => t.category.trim()))];

      return [
        { value: '', name: 'All Categories' },
        ...uniqueNames.map(i => ({
          value: i,
          name: i.charAt(0).toUpperCase() + i.slice(1)
        }))
      ] as CategoryItem[];
    });
    const filteredTickets = computed(() => {
      const loweredValue = store.filterText().toLowerCase().trim();
      const category = store.category();

      let res = store.tickets();

      if (loweredValue) {
        res = res.filter(t => {
          return t.title.toLowerCase().trim().includes(loweredValue)
            || t.description.toLowerCase().includes(loweredValue);
        })
      }

      if (category) {
        res = res.filter(t => {
          return t.category === category;
        })
      }

      return res;
    })

    return {
      currentTicket,
      categories,
      filteredTickets
    }
  }),
  withMethods(store => ({
    setCurrentTicketId: (id: string) => patchState(store, setCurrentTicketId(id)),
    addTicketToCart: (ticket: Ticket) => store.cartStore.addTicketToCart(ticket),
    updateTextFilter: (text: string) => patchState(store, updateTextFilter(text)),
    updateCategoryFilter: (category: string) => patchState(store, updateCategoryFilter(category))
  })),
  withHooks({
    onInit(store) {
      patchState(store, { tickets: store.stateService.getTickets()})

      const stateJSON = localStorage.getItem('tickets');
      if (stateJSON) {
        const state = JSON.parse(stateJSON) as TicketsSlice;
        patchState(store, state)
      }

      effect(() => {
        const state = getState(store);
        const stateJSON = JSON.stringify(state);
        localStorage.setItem('tickets', stateJSON)
      });
    }
  })
)
