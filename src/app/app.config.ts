import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {cartFeature} from './stores/reducers/cart.reducers';
import {ticketFeature} from './stores/reducers/ticket.reducers';
import {metaReducer} from './stores/selectors/meta.selectors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore(
      {
        [ticketFeature.name]: ticketFeature.reducer,
        [cartFeature.name]: cartFeature.reducer
      },
      {
        metaReducers: [metaReducer]
      }
    ),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
