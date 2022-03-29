import { Subjects, Publisher, PaymentCreatedEvent } from '@qtees/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
