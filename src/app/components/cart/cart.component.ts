import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TicketStore} from '../../stores/ticket-store/ticket.store';
import {CartStore} from '../../stores/cart-store/cart.store';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent {
  store = inject(TicketStore)
  cartStore = inject(CartStore)
}
