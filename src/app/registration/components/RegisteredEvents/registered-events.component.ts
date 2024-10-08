import {Component, OnInit} from '@angular/core';
import {AttendeeService} from '../../services/attendee.service';
import { RatingService } from '../../../engagement/services/rating.service';
import {Attendee} from '../../model/attendee.entity';
import { Rating } from '../../../engagement/model/rating.entity';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {NgForOf, NgIf} from '@angular/common';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {Event} from '../../model/event.entity';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-registered-events',
  standalone: true,
    imports: [
        MatFormField,
        TranslateModule,
        FormsModule,
        MatButton,
        MatInput,
        NgIf,
        MatLabel,
        MatCard,
        MatCardContent,
        MatCardFooter,
        MatCardHeader,
        MatCardTitle,
        NgForOf
    ],
  templateUrl: './registered-events.component.html',
  styleUrl: './registered-events.component.css'
})
export class RegisteredEventsComponent implements OnInit {
  events: Event[] = [];
  attendees: Attendee[] = [];
  ratings: Rating[] = [];

  constructor(
    private eventService: EventService,
    private attendeeService: AttendeeService,
    private ratingService: RatingService
  ) {}

  ngOnInit(): void {
    this.loadEvents();
    this.loadAttendees();
    this.loadRatings();
  }

  /**
   * @method loadEvents
   * @description Fetches all events from the event service and stores them in the 'events' array.
   * @returns {void}
   */
  loadEvents(): void {
    this.eventService.getAllEvents().subscribe({
      next: (events) => (this.events = events),
      error: (error) => console.error('Error fetching events', error),
    });
  }

  /**
   * @method loadAttendees
   * @description Fetches all attendees from the attendee service and stores them in the 'attendees' array.
   * @returns {void}
   */
  loadAttendees(): void {
    this.attendeeService.getAllAttendees().subscribe({
      next: (attendees) => (this.attendees = attendees),
      error: (error) => console.error('Error fetching attendees', error),
    });
  }

  /**
   * @method loadRatings
   * @description Fetches all ratings from the rating service and stores them in the 'ratings' array.
   * @returns {void}
   */
  loadRatings(): void {
    this.ratingService.getAllRating().subscribe({
      next: (ratings) => (this.ratings = ratings),
      error: (error) => console.error('Error fetching ratings', error),
    });
  }

  /**
   * @method getRegisteredAttendees
   * @description Returns the number of attendees who have checked in for a given event.
   * @param {number} eventId - The ID of the event for which to count the checked-in attendees.
   * @returns {number} The number of attendees who have checked in for the event.
   */
  getRegisteredAttendees(eventId: number): number {
    return this.attendees.filter(
      (attendee) => attendee.eventId === eventId && attendee.checkedInAt !== null
    ).length;
  }

  /**
   * @method getAverageRating
   * @description Calculates the average rating for a given event based on ratings from checked-in attendees.
   * @param {number} eventId - The ID of the event for which to calculate the average rating.
   * @returns {string} The average rating as a string rounded to one decimal place, or 'No ratings' if there are no ratings.
   */
  getAverageRating(eventId: number): string {
    const checkedInAttendees = this.attendees.filter(
      (attendee) => attendee.eventId === eventId && attendee.checkedInAt !== null
    );

    const ratingsForEvent = checkedInAttendees
      .map((attendee) =>
        this.ratings.find((rating) => rating.attendeeId === attendee.id)
      )
      .filter((rating) => rating !== undefined) as Rating[];

    if (ratingsForEvent.length === 0) {
      return 'No ratings';
    }

    const averageRating =
      ratingsForEvent.reduce((sum, rating) => sum + rating.rating, 0) /
      ratingsForEvent.length;
    return averageRating.toFixed(1);
  }
}
