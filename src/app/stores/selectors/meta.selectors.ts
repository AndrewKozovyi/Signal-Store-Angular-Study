import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

export function metaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem('Tickets');
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          console.error('Failed to parse storage');
        }
      }
    }

    const nextState = reducer(state, action);

    localStorage.setItem('Tickets', JSON.stringify(nextState));

    return nextState;
  };
}
