import { Publisher, Subjects, TicketCreatedEvent } from '@qtees/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
