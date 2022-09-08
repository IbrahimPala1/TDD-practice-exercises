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
})