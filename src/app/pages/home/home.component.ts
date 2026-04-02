import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {TicketStore} from '../../stores/ticket-store/ticket.store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class HomeComponent {
  store = inject(TicketStore)
}
