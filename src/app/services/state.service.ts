import {Injectable, signal} from '@angular/core';
import {Ticket} from '../models/ticket.model';

@Injectable({providedIn: 'root'})
export class StateService {
  // Hardcoded State
  private readonly tickets = signal<Ticket[]>([
    {
      id: '1',
      title: 'Summer Music Festival',
      description: 'The biggest outdoor music event of the year featuring top international artists and local bands.',
      date: '2026-06-15',
      time: '14:00',
      place: 'Central Park',
      imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1920&h=1080&q=80',
      price: 75,
      category: 'music'
    },
    {
      id: '2',
      title: 'Tech Conference 2026',
      description: 'Explore the future of AI, Web development, and reactive state management with industry leaders.',
      date: '2026-07-22',
      time: '09:00',
      place: 'Expo Center',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&h=1080&q=80',
      price: 150,
      category: 'tech'
    },
    {
      id: '3',
      title: 'Local Art Exhibition',
      description: 'Discover local artists, amazing modern artwork, and immersive interactive installations.',
      date: '2026-05-10',
      time: '10:00',
      place: 'City Gallery',
      imageUrl: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=1920&h=1080&q=80',
      price: 20,
      category: 'art'
    },
    {
      id: '4',
      title: 'Gourmet Food & Wine Expo',
      description: 'Taste exquisite dishes from Michelin-starred chefs and sample award-winning wines.',
      date: '2026-08-05',
      time: '17:00',
      place: 'Grand Hotel Ballroom',
      imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&h=1080&q=80',
      price: 95,
      category: 'food'
    },
    {
      id: '5',
      title: 'City Charity Marathon',
      description: 'Join thousands of runners in our annual 10k and half-marathon to support local charities.',
      date: '2026-09-12',
      time: '06:30',
      place: 'Downtown Square',
      imageUrl: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1920&h=1080&q=80',
      price: 35,
      category: 'charity'
    },
    {
      id: '6',
      title: 'Stand-up Comedy Night',
      description: 'A night of non-stop laughs featuring touring headliners and the city’s best up-and-coming comics.',
      date: '2026-05-20',
      time: '20:00',
      place: 'The Laugh Lounge',
      imageUrl: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1920&h=1080&q=80',
      price: 25,
      category: 'comedy'
    },
    {
      id: '7',
      title: 'Jazz in the Park',
      description: 'Bring a blanket and enjoy a relaxing evening of smooth jazz under the stars.',
      date: '2026-07-02',
      time: '18:30',
      place: 'Riverside Amphitheater',
      imageUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1920&h=1080&q=80',
      price: 15,
      category: 'music'
    },
    {
      id: '8',
      title: 'Startup Pitch Night',
      description: 'Watch innovative founders pitch their next big ideas to a panel of angel investors and venture capitalists.',
      date: '2026-06-28',
      time: '18:00',
      place: 'Innovation Hub',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/et00363690-wjeghaczkw-landscape.jpg',
      price: 10,
      category: 'tech'
    },
    {
      id: '9',
      title: 'Theater: The Classics Revived',
      description: 'A stunning modern retelling of a Shakespearean classic, brought to life by a world-renowned cast.',
      date: '2026-10-14',
      time: '19:30',
      place: 'Historic Grand Theater',
      imageUrl: 'https://ticketor.net/usercontent/131/evf/1274.jpg',
      price: 60,
      category: 'art'
    },
    {
      id: '10',
      title: 'Global E-Sports Championship',
      description: 'The final showdown of the season. Watch the top teams battle it out live on the main stage.',
      date: '2026-11-20',
      time: '11:00',
      place: 'Mega Arena',
      imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&h=1080&q=80',
      price: 45,
      category: 'tech'
    }
  ]);

  public getTickets() {
    return this.tickets();
  }
}
