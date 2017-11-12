// @flow

import data from '../data'

import type { Narrative, NarrativeId } from './types'

export const find = (id: NarrativeId): ?Narrative =>
  data.narratives.find(n => n.id === parseInt(id, 10))

export const getChoices = (narrative: Narrative): Narrative[] =>
  Array.isArray(narrative.choices)
    ? // https://github.com/facebook/flow/issues/1414
      narrative.choices.map((id: NarrativeId) => find(id)).filter(Boolean)
    : []
