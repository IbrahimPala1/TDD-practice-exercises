const frequency = require('./frequency_challenge')

describe('frequency', () => {
    it('checks that 40 returns 40', () => {
        expect(frequency([40])).toEqual([40])
    })
    it('checks that 400 returns 400', () => {
        expect(frequency([400])).toEqual([400])
    })
})


// low is 30
// high is 500