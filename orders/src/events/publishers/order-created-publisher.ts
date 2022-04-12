import { Publisher, OrderCreatedEvent, Subjects } from '@vgsticket/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
