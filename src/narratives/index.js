// @flow

let data = { narratives: [] }

import type { Narrative, NarrativeId } from './types'

export const find = (id: NarrativeId): ?Narrative =>
  data.narratives.find(n => n.id === parseInt(id, 10))

export const filterWithChoice = (id: NarrativeId): Narrative[] =>
  data.narratives.filter(n => (n.choices || []).indexOf(id) > -1)

export const getChoices = (narrative: Narrative): Narrative[] =>
  Array.isArray(narrative.choices)
    ? // https://github.com/facebook/flow/issues/1414
      narrative.choices.map((id: NarrativeId) => find(id)).filter(Boolean)
    : []

export const save = (narratives: ?(Narrative[])) =>
  narratives ? (data.narratives = narratives) : null
