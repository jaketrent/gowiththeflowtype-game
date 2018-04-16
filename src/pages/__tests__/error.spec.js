// @flow
const { error } = require('../error')

describe('#error', () => {
  // removeable -- signature test
  test('takes props', () => {
    expect(error.length).toBe(1)
  })

  // keep - tests content, not just type
  test('returns html of error code', () => {
    const code = '418'
    const actual = error({
      code
    })
    expect(actual.getHTML()).toEqual(expect.stringMatching(/error__code/))
    expect(actual.values).toEqual(expect.arrayContaining([code]))
  })
})
