import {patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState} from '@ngrx/signals';
import {initialState} from './ticket.slice';
import {computed, inject} from '@angular/core';
import {StateService} from '../../services/state.service';
import {addTicketToCart, setCurrentTicketId, toggleCart, updateCategoryFilter, updateTextFilter} from './ticket.helper';
import {CategoryItem, Ticket} from '../../models/ticket.model';

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
      cartCount,
      categories,
      filteredTickets
    }
  }),
  withMethods(store => ({
    setCurrentTicketId: (id: string) => patchState(store, setCurrentTicketId(id)),
    addTicketToCart: (ticket: Ticket) => patchState(store, addTicketToCart(ticket)),
    toggleCart: (isOpen: boolean) => patchState(store, toggleCart(isOpen)),
    updateTextFilter: (text: string) => patchState(store, updateTextFilter(text)),
    updateCategoryFilter: (category: string) => patchState(store, updateCategoryFilter(category))
  })),
  withHooks({
    onInit(store) {
      patchState(store, { tickets: store.stateService.getTickets()})
    }
  })
)
