import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartItem} from '../../models/ticket.model';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent {
  cart = signal<CartItem[]>([]);
}
