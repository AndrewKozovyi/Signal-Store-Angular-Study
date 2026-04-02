import {Component, inject, computed, signal, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {TicketStore} from '../../stores/ticket-store/ticket.store';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: 'ticket-detail.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class TicketDetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  store = inject(TicketStore)

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.setCurrentTicketId(id);
    }
  }
}
