import {Component, effect, inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TicketStore} from '../../stores/ticket.store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule]
})
export class HomeComponent {
  public readonly store = inject(TicketStore)
  public readonly text = signal<string>(this.store.filterText());

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
