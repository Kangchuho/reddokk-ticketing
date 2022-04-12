import { Publisher, Subjects, TicketUpdatedEvent } from '@vgsticket/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
