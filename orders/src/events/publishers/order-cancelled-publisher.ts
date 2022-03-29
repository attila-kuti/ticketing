import { Subjects, Publisher, OrderCancelledEvent } from '@qtees/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
