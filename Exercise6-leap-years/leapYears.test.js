const leapYears = require ("./leapYears")

describe('leapyears', () => {
    it('checks that years divisible by 400 returns true', () => {
        expect(leapYears(400)).toEqual(true)
    })
    it('checks that years divisible by 400 returns true', () => {
        expect(leapYears(800)).toEqual(true)
    })
    it('checks that years divisible by 400 returns true', () => {
        expect(leapYears(1200)).toEqual(true)
    })
    
})