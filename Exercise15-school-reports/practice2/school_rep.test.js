const school_reports = require('./school_rep')

describe('school_reports', () => {
    it('checks if green returna green: 1', () => {
        expect(school_reports('Green')).toBe('Green: 1')
})
})