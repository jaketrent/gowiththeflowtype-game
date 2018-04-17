// @flow
const { choice, prompt, text } = require('../index')
const { NarrativeStore } = require('../../narratives/store')

const store = new NarrativeStore()

describe('#prompt', () => {
  // removeable -- signature test
  test('takes props', () => {
    expect(prompt.length).toBe(1)
  })

  test('not shown if narrative prompt is missing', () => {
    const actual = prompt({
      narrative: { id: 123, text: 'some text' },
      store: new NarrativeStore()
    })
    expect(actual).toBe(null)
  })

  // keep - tests content, not just type
  test('returns html of narrative prompt', () => {
    const narrativePrompt = 'some prompt'
    const actual = prompt({
      narrative: { id: 123, text: 'some text', prompt: narrativePrompt },
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
    const actual = text({
      narrative: { id: 123, text: narrativeText },
      store
    })
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
    const actual = prompt({
      narrative: { id: 123, text: 'some text' },
      store
    })
    expect(actual).toBe(null)
  })

  // keep - tests content, not just type
  test('returns html of narrative choiceText', () => {
    const narrativeChoice = 'some choice'
    const actual = choice({
      narrative: { id: 123, text: 'some text', choiceText: narrativeChoice },
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
