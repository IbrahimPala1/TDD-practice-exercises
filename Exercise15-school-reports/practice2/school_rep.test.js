const school_reports = require('./school_rep')

describe('school_reports', () => {
    it('checks if green returna green: 1', () => {
        expect(school_reports('Green')).toBe('Green: 1')
     })
     it('checks if amber returna amber: 1', () => {
        expect(school_reports('Amber')).toBe('Amber: 1')
     })
     it('checks if red returns red:1', () => {
        expect(school_reports('Red')).toBe('Red: 1')
     })
     it('checks if red returns red:1', () => {
        expect(school_reports('Red')).toBe('Red: 1')
     })
     it('checks if two red returns red:2', () => {
        expect(school_reports('Red, Red')).toBe('Red: 2')
     })
     it('checks if two amber returns amber:2', () => {
        expect(school_reports('Amber, Amber')).toBe('Amber: 2')
     })
     it('checks if two amber returns amber:2', () => {
        expect(school_reports('Green, Green')).toBe('Green: 2')
     })
     it('checks if two different colors returns amber:1, green:1', () => {
        expect(school_reports('Green, Amber')).toBe('Green: 1, Amber: 1')
     })
     it('checks if two different colors returns red:1, amber:1', () => {
        expect(school_reports('Red, Amber')).toBe('Red: 1, Amber: 1')
     })
     it('checks if two different colors returns Red:1, green:1', () => {
        expect(school_reports('Red, Green')).toBe('Red: 1, Green: 1')
     })
})