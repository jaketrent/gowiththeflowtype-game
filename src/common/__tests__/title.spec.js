const title = require('../title').default

test('takes props arg', () => {
  expect(title.length).toBe(1)
})

test('returns styled template', () => {
  const narrative = { id: 123, text: 'some text' }
  const actual = title({ narrative })
  expect(actual.getHTML()).toEqual(expect.stringMatching(/title/))
  expect(actual.getHTML()).toEqual(expect.stringMatching(/title__link/))
})

// TODO: modify narratives mod to take a state param instead of default
