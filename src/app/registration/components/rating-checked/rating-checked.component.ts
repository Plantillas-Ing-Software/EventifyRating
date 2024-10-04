import { Component } from '@angular/core';
import {AttendeeService} from '../../services/attendee.service';
import {RatingService} from '../../services/rating.service';
import {Attendee} from '../../model/attendee.entity';
import {Rating} from '../../model/rating.entity';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-rating-checked',
  standalone: true,
  imports: [
    MatFormField,
    TranslateModule,
    FormsModule,
    MatButton,
    MatInput,
    NgIf,
    MatLabel
  ],
  templateUrl: './rating-checked.component.html',
  styleUrl: './rating-checked.component.css'
})
export class RatingCheckedComponent {
  ticketIdentifier: string = '';
  rating: number = 0;
  message: string = '';

  constructor(private attendeeService: AttendeeService, private ratingService: RatingService) {}

  /**
   * @method submitRating
   * @description Validates the ticket and submits the rating if all conditions are met
   */
  submitRating(): void {
    this.attendeeService.getAllAttendees().subscribe({
      next: (attendees: Attendee[]) => {
        const matchingAttendee = attendees.find(attendee => attendee.ticketIdentifier === this.ticketIdentifier);
        if (!matchingAttendee) {
          this.message = 'Invalid Ticket Identifier';
        } else if (!matchingAttendee.checkedInAt) {
          this.message = 'You can only rate events you have attended to';
        } else {
          this.ratingService.getAllRating().subscribe({
            next: (ratings: Rating[]) => {
              const existingRating = ratings.find(rating => rating.attendeeId === matchingAttendee.id && rating.eventId === matchingAttendee.eventId);

              if (existingRating) {
                this.message = 'You have already rated this event';
              } else {
                const newRating: Rating = {
                  id: 0,
                  attendeeId: matchingAttendee.id,
                  eventId: matchingAttendee.eventId,
                  rating: this.rating,
                  ratedAt: new Date().toISOString()
                };
                this.ratingService.createRating(newRating).subscribe({
                  next: () => {
                    this.message = 'Event successfully rated';
                  },
                  error: (error) => {
                    console.error('Error rating event', error);
                    this.message = 'Failed to rate event. Please try again.';
                  }
                });
              }
            },
            error: (error) => {
              console.error('Error fetching ratings', error);
              this.message = 'Failed to fetch ratings.';
            }
          });
        }
      },
      error: (error) => {
        console.error('Error fetching attendees', error);
        this.message = 'Failed to fetch attendees.';
      }
    });
  }
}
