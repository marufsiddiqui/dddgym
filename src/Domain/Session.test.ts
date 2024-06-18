import { Participant } from './Participant.js'
import { Session } from './Session.js'

console.log(crypto.randomUUID())

describe('Session Domain Test', () => {
  describe('Reserve Spot', () => {
    it('when no room is available, reservation should fail', () => {
      // arrange
      const session = Session.create(1, crypto.randomUUID())
      const participant1 = Participant.create(crypto.randomUUID(), crypto.randomUUID())
      const participant2 = Participant.create(crypto.randomUUID(), crypto.randomUUID())
      // act
      session.reserveSpot(participant1)
      session.reserveSpot(participant2)
      // assert
      // participant 2 reservation fail
    })
  })
})
