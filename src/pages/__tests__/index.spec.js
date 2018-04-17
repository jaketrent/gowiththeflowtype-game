// @flow
const { choice, prompt, text, title } = require('../index')
const { NarrativeStore } = require('../../narratives/store')

const narrative = { id: 123, text: 'some text' }
const store = new NarrativeStore()

describe('#prompt', () => {
  // removeable -- signature test
  test('takes props', () => {
    expect(prompt.length).toBe(1)
  })

  test('not shown if narrative prompt is missing', () => {
    const actual = prompt({ narrative, store })
    expect(actual).toBe(null)
  })

  // keep - tests content, not just type
  test('returns html of narrative prompt', () => {
    const narrativePrompt = 'some prompt'
    const actual = prompt({
      narrative: { ...narrative, prompt: narrativePrompt },
      store
    })
    expect(actual).not.toBeNull()
    if (actual) {
      expect(actual.getHTML()).toEqual(expect.stringMatching(/index__prompt/))
      expect(actual.values).toEqual(expect.arrayContaining([narrativePrompt]))
    }
  })
})

describe('#text', () => {
  // removeable -- signature test
  test('takes props', () => {
    expect(text.length).toBe(1)
  })

  // keep - tests content, not just type
  test('returns html of narrative text', () => {
    const narrativeText = 'some text'
    const actual = text({ narrative, store })
    expect(actual.getHTML()).toEqual(expect.stringMatching(/index__text/))
    expect(actual.values).toEqual(expect.arrayContaining([narrativeText]))
  })
})

describe('#choice', () => {
  // removeable -- signature test
  test('takes props', () => {
    expect(choice.length).toBe(1)
  })

  test('not shown if narrative choiceText is missing', () => {
    const actual = prompt({ narrative, store })
    expect(actual).toBe(null)
  })

  // keep - tests content, not just type
  test('returns html of narrative choiceText', () => {
    const narrativeChoice = 'some choice'
    const actual = choice({
      narrative: { ...narrative, choiceText: narrativeChoice },
      store
    })
    expect(actual).not.toBeNull()
    if (actual) {
      expect(actual.getHTML()).toEqual(expect.stringMatching(/index__choice/))
      expect(actual.values[0].values).toEqual(
        expect.arrayContaining([narrativeChoice])
      )
    }
  })
})

describe('#title', () => {
  test('takes props arg', () => {
    expect(title.length).toBe(1)
  })

  test('returns styled template', () => {
    const actual = title({ narrative, store })
    expect(actual.getHTML()).toEqual(expect.stringMatching(/title/))
    expect(actual.getHTML()).toEqual(expect.stringMatching(/title__link/))
  })

  test('no rewind button without narratives that led to this choice', () => {
    const actual = title({ narrative, store })
    expect(actual.getHTML()).not.toEqual(expect.stringMatching(/title__rewind/))
  })

  test('rewind button displays when previous narrative with this choice found', () => {
    const store = new NarrativeStore([
      { id: 234, text: 'some text', choices: [narrative.id] }
    ])
    const actual = title({ narrative, store })
    expect(actual.values[0].strings[0]).toEqual(
      expect.stringMatching(/title__rewind/)
    )
  })
})
