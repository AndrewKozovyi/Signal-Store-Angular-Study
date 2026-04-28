import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CartComponent} from './components/cart/cart.component';
import {CartStore} from './stores/cart-store/cart.store';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CartComponent]
})
export class AppComponent {
  store = inject(CartStore)
}
