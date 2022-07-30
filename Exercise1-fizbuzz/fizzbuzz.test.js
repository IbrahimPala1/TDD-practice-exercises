const fizzbuzz = require("./fizzbuzz")

describe('fizzbuzz', () => {
    it('checks that it returns a number', () => {
        expect(fizzbuzz(1)).toEqual('1')
    })
    it('checks that 3 returns a fizz', () => {
        expect(fizzbuzz(3)).toEqual('fizz')
    })
})