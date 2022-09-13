const school_reports = require('./school_rep')

describe('school_reports', () => {
    it('checks if green returna green: 1', () => {
        expect(school_reports('Green')).toBe('Green: 1, Amber: 0, Red: 0')
     })
     it('checks if amber returna amber: 1', () => {
        expect(school_reports('Amber')).toBe('Green: 0, Amber: 1, Red: 0')
     })
     it('checks if red returns red:1', () => {
        expect(school_reports('Red')).toBe('Green: 0, Amber: 0, Red: 1')
     })
     it('checks if red returns red:1', () => {
        expect(school_reports('Red')).toBe('Green: 0, Amber: 0, Red: 1')
     })
     it('checks if two red returns red:2', () => {
        expect(school_reports('Red, Red')).toBe('Green: 0, Amber: 0, Red: 2')
     })
     it('checks if two amber returns amber:2', () => {
        expect(school_reports('Amber, Amber')).toBe('Green: 0, Amber: 2, Red: 0')
     })
     it('checks if two amber returns amber:2', () => {
        expect(school_reports('Green, Green')).toBe('Green: 2, Amber: 0, Red: 0')
     })
     it('checks if two different colors returns amber:1, green:1', () => {
        expect(school_reports('Green, Amber')).toBe('Green: 1, Amber: 1, Red: 0')
     })
     it('checks if two different colors returns red:1, amber:1', () => {
        expect(school_reports('Red, Amber')).toBe('Green: 0, Amber: 1, Red: 1')
     })
     it('checks if two different colors returns Red:1, green:1', () => {
        expect(school_reports('Red, Green')).toBe('Green: 1, Amber: 0, Red: 1')
     })
     it('checks if two different colors returns Red:1, green:1', () => {
        expect(school_reports('red, Green, Red, Green, Amber')).toBe('Green: 2, Amber: 1, Red: 2')
     })
     it('checks if two different colors returns Red:1, green:1', () => {
        expect(school_reports('red, green, Red, Green, Amber')).toBe('Green: 2, Amber: 1, Red: 2')
     })
     it('checks if two different colors returns Red:1, green:1', () => {
        expect(school_reports('red, greEn, ReD, GreEn, AmbEr')).toBe('Green: 2, Amber: 1, Red: 2')
     })
     it('checks if two different colors returns Red:1, green:1', () => {
        expect(school_reports('Green, black')).toBe('Incorrect input')
     })
     it('checks if two different colors returns Red:1, green:1', () => {
        expect(school_reports('Green, green, red, ReD, amBER, red')).toBe('Green: 2, Amber: 1, Red: 3')
     })
     
})