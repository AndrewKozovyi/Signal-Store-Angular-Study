import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CartComponent} from './components/cart/cart.component';
import {TicketStore} from './stores/ticket-store/ticket.store';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CartComponent]
})
export class AppComponent {
  store = inject(TicketStore)
}
