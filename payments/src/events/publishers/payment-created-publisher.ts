import { Subjects, Publisher, PaymentCreatedEvent } from '@vgsticket/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
