const { NarrativeStore, save } = require('../store')

const narratives = [
  { id: 123, text: 'first narrative' },
  { id: 234, text: 'second narrative', choices: [123] },
  { id: 345, text: 'third narrative', choices: [123, 234] },
  { id: 456, text: 'fourth narrative' }
]

describe('#NarrativeStore', () => {
  test('#find returns narrative', () => {
    const store = new NarrativeStore(narratives)
    const expected = narratives[2]
    const actual = store.find(expected.id)
    expect(actual).toEqual(expected)
  })

  test('#find returns undefined when not found', () => {
    const store = new NarrativeStore(narratives)
    const actual = store.find(333)
    expect(actual).toBe(undefined)
  })

  test('#filterWithChoice returns one that has id as choice', () => {
    const store = new NarrativeStore(narratives)
    const actual = store.filterWithChoice(234)
    expect(actual).toEqual([narratives[2]])
  })

  test('#filterWithChoice returns more than one that have id as choice', () => {
    const store = new NarrativeStore(narratives)
    const actual = store.filterWithChoice(123)
    expect(actual).toEqual([narratives[1], narratives[2]])
  })

  test('#getChoices returns narratives matching choices ids', () => {
    const store = new NarrativeStore(narratives)
    const actual = store.getChoices(narratives[2])
    expect(actual).toEqual([narratives[0], narratives[1]])
  })
})

describe('#save', () => {
  test('returns new empty store', () => {
    expect(save().data).toEqual([])
  })

  test('returns narratives in store', () => {
    expect(save(narratives).data).toEqual(narratives)
  })
})
