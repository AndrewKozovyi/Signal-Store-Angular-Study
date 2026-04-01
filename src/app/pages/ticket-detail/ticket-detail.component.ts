import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: 'ticket-detail.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class TicketDetailComponent {
  route = inject(ActivatedRoute);
  state = inject(StateService);

  ticketId = computed(() => this.route.snapshot.paramMap.get('id'));
  ticket = computed(() => this.state.tickets().find(t => t.id === this.ticketId()));
}
