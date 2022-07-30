const schoolReports = require('./schoolReports')
describe('green', () => {
    it('checks that green returrns Green: 1', () => {
        expect(schoolReports("Green")).toEqual("Green:1")
    })
    it('checks that two greens return Green:2', () => {
        expect(schoolReports("Green, Green")).toEqual("Green:2")
    })
    it('checks that two greens return Green:2', () => {
        expect(schoolReports("Green, Green, Green")).toEqual("Green:3")
    })
})