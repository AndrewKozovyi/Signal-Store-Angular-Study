import {Component, inject, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CartComponent} from './components/cart/cart.component';
import {CartStore} from './stores/cart.store';
import {TicketStore} from './stores/ticket.store';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CartComponent]
})
export class AppComponent implements OnInit {
  store = inject(CartStore)
  ticketStore = inject(TicketStore);

  ngOnInit() {
    this.ticketStore.loadTickets();
  }
}
