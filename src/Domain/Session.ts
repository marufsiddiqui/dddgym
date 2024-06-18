import { Participant } from './Participant.js'

export class Session {
  private constructor(
    private readonly _id: string,
    private readonly _trainerId: string,
    private readonly _maxParticipants: number,
    private readonly _participants: string[] = []
  ) {}

  static create(maxParticipants: number, trainerId: string) {
    const id = crypto.randomUUID()
    return new Session(id, trainerId, maxParticipants)
  }

  reserveSpot(participant: Participant) {
    if (this._participants.length >= this._maxParticipants) {
      throw new Error('Room is full')
    }
    this._participants.push(participant.id)
  }
}
