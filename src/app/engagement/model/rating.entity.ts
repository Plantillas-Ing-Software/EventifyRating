/**
 * @class Rating
 * @description Represents a rating given by an attendee for a specific event.
 */
export class Rating {
  id: number;
  attendeeId: number;
  eventId: number;
  rating: number;
  ratedAt: string;

  constructor(id: number, attendeeId: number, eventId: number, rating: number, ratedAt: string) {
    this.id = id;
    this.attendeeId = attendeeId;
    this.eventId = eventId;
    this.rating = rating;
    this.ratedAt = ratedAt;
  }
}
