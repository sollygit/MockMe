export class NotificationRequest {
  body: string;
  timeStamp: Date;

  public constructor(
    fields?: {
      body?: string,
      timeStamp?: Date
    }) {
    if (fields)
      Object.assign(this, fields);
  }
}
