/**
 * @class Attendee
 * @description
 * Represents an attendee of an event, containing personal information
 * and ticket details. The class includes properties for the attendee's
 * identification, event association, and check-in status.
 */
export class Attendee {
  id: number;
  firstName: string;
  lastName: string;
  eventId: number;
  ticketIdentifier: string;
  checkedInAt: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    eventId: number,
    ticketIdentifier: string,
    checkedInAt: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.eventId = eventId;
    this.ticketIdentifier = ticketIdentifier;
    this.checkedInAt = checkedInAt;
  }
}
