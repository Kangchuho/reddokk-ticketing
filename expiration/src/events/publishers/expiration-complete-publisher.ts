import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@vgsticket/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
