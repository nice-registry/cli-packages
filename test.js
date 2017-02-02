const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const names = require('.')

describe('repos', () => {
  it('is an array with lots of names', () => {
    expect(names.length).to.be.above(47 * 1000)
  })

  it('includes some well-known command-line tools', () => {
    expect(names.indexOf('mocha')).to.be.below(100)
  })
})
