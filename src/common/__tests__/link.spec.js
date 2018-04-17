// @flow
const link = require('../link').default

test('takes a props argument', () => {
  expect(link.length).toBe(1)
})

test('returns styled link template', () => {
  const className = 'some__class'
  const href = '/some/link'
  const label = 'some text'
  const actual = link({ className, href, label })
  expect(actual.values).toEqual(
    expect.arrayContaining([className, href, label])
  )
})
