import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartStore} from '../../stores/cart-store/cart.store';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent {
  cartStore = inject(CartStore)
}
