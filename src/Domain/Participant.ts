export class Participant {
  private constructor(
    private readonly _id: string,
    private readonly _userId: string,
    private readonly _sessionIds: string[] = []
  ) {}

  get id() {
    return this._id
  }

  static create(id: string, userId: string) {
    return new Participant(id, userId)
  }
}
