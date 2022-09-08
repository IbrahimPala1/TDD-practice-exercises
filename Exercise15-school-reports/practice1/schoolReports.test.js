const schoolReports = require('./schoolReports')
describe('green', () => {
    it('checks that green returrns Green: 1', () => {
        expect(schoolReports("Green")).toEqual("Green:1")
    })
})