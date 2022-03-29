import { Publisher, Subjects, TicketUpdatedEvent } from '@qtees/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
