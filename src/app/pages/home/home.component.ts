import {Component, effect, inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {TicketStore} from '../../stores/ticket-store/ticket.store';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule]
})
export class HomeComponent {
  public readonly text = signal<string>('');

  public readonly store = inject(TicketStore)

  constructor() {
    effect((onCleanup) => {
      const text = this.text();

      const timeout = setTimeout(() => {
        this.store.updateTextFilter(text);
      }, 500);

      onCleanup(() => {
        clearTimeout(timeout);
      });
    });
  }

  public changeCategory(event: Event) {
    const element = event.target as HTMLSelectElement;
    const value = element.value;

    this.store.updateCategoryFilter(value)
  }
}
