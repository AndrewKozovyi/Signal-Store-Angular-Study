import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {TicketStore} from '../../stores/ticket.store';
import {CartStore} from '../../stores/cart.store';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: 'ticket-detail.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class TicketDetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  ticketStore = inject(TicketStore);
  cartStore = inject(CartStore);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.ticketStore.setCurrentTicketId(id);
    }
  }
}
