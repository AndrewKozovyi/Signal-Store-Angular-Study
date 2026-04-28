import {PartialStateUpdater} from '@ngrx/signals';
import {TicketsSlice} from './ticket.slice';


export function setCurrentTicketId(id: string): PartialStateUpdater<TicketsSlice> {
  return _ => ({
    currentTicketId: id
  })
}

export function updateTextFilter(text: string): PartialStateUpdater<TicketsSlice> {
  return _ => ({
    filterText: text
  })
}

export function updateCategoryFilter(category: string): PartialStateUpdater<TicketsSlice> {
  return _ => ({
    category: category
  })
}
