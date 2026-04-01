import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TicketDetailComponent } from './pages/ticket-detail/ticket-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ticket/:id', component: TicketDetailComponent },
  { path: '**', redirectTo: '' }
];
