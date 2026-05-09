import { Injectable, inject } from '@angular/core';
import * as selectors from './selectors/ticket.selectors';
import { Store } from '@ngrx/store';
import {TicketActions} from './actions/ticket.actions';
import {StateService} from '../services/state.service';

@Injectable({ providedIn: 'root' })
export class TicketStore {
  private readonly store = inject(Store);
  private readonly ticketService = inject(StateService);

  filteredTickets = this.store.selectSignal(selectors.selectFilteredTickets);
  categories = this.store.selectSignal(selectors.selectCategories);

  filterText = this.store.selectSignal(selectors.selectFilterText);
  category = this.store.selectSignal(selectors.selectCategory);

  currentTicket = this.store.selectSignal(selectors.selectCurrentTicket);

  setCurrentTicketId(id: string): void {
    this.store.dispatch(TicketActions.setCurrentTicketId({ id }));
  }

  updateTextFilter(text: string): void {
    this.store.dispatch(TicketActions.updateTextFilter({ text }));
  }

  updateCategoryFilter(category: string): void {
    this.store.dispatch(TicketActions.updateCategoryFilter({ category }));
  }

  loadTickets(): void {
    const tickets = this.ticketService.getTickets();
    this.store.dispatch(TicketActions.loadTicketsSuccess({ tickets }))
  }
}
