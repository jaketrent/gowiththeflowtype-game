// @flow

const { NarrativeStore } = require('../../narratives/store')
const title = require('../title').default

test('takes props arg', () => {
  expect(title.length).toBe(1)
})

test('returns styled template', () => {
  const id = 123
  const store = new NarrativeStore()
  const actual = title({ id, store })
  expect(actual.getHTML()).toEqual(expect.stringMatching(/title/))
  expect(actual.getHTML()).toEqual(expect.stringMatching(/title__link/))
})

test('no rewind button without narratives that led to this choice', () => {
  const id = 123
  const store = new NarrativeStore()
  const actual = title({ id, store })
  expect(actual.getHTML()).not.toEqual(expect.stringMatching(/title__rewind/))
})

test('rewind button displays when previous narrative with this choice found', () => {
  const id = 123
  const store = new NarrativeStore([
    { id: 234, text: 'some text', choices: [123] }
  ])
  const actual = title({ id, store })
  expect(actual.values[0].strings[0]).toEqual(
    expect.stringMatching(/title__rewind/)
  )
})
