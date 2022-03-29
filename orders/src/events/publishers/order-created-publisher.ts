import { Publisher, OrderCreatedEvent, Subjects } from '@qtees/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
