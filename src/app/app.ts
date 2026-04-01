import {Component, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CartComponent} from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CartComponent]
})
export class AppComponent {
  cartCount = signal<number>(0);
}
