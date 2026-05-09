import { createSelector } from '@ngrx/store';
import {ticketFeature} from '../reducers/ticket.reducers';
import {CategoryItem} from '../../models/ticket.model';

export const { selectTickets, selectFilterText, selectCategory, selectCurrentTicketId } = ticketFeature;

export const selectFilteredTickets = createSelector(
  selectTickets,
  selectFilterText,
  selectCategory,
  (tickets, text, category) => {
    const safeTickets = tickets || [];
    const safeText = text || '';
    const safeCategory = category || '';

    const loweredValue = safeText.toLowerCase().trim();
    let res = safeTickets;

    if (loweredValue) {
      res = res.filter(t => t.title.toLowerCase().trim().includes(loweredValue) || t.description.toLowerCase().includes(loweredValue));
    }
    if (safeCategory) {
      res = res.filter(t => t.category === safeCategory);
    }
    return res;
  }
);

export const selectCategories = createSelector(
  selectTickets,
  (tickets): CategoryItem[] => {
    const safeTickets = tickets || [];

    const uniqueNames = [...new Set(safeTickets.map(t => (t.category || '').trim()))];

    return [
      { value: '', name: 'All Categories' },
      ...uniqueNames.map(i => ({
        value: i,
        name: i.charAt(0).toUpperCase() + i.slice(1)
      }))
    ];
  }
);

export const selectCurrentTicket = createSelector(
  selectTickets,
  selectCurrentTicketId,
  (tickets, currentId) => {
    const safeTickets = tickets || [];

    return safeTickets.find(t => t.id === currentId) || null;
  }
);
