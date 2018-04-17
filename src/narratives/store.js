// @flow

let data = { narratives: [] }

import type { Narrative, NarrativeId } from './types'

export class NarrativeStore {
  data: Narrative[]
  constructor(narratives: ?(Narrative[])) {
    this.data = narratives || []
  }
  find(id: NarrativeId): ?Narrative {
    return this.data.find(n => n.id === parseInt(id, 10))
  }
  filterWithChoice(id: NarrativeId): Narrative[] {
    return this.data.filter(n => (n.choices || []).indexOf(id) > -1)
  }
  getChoices(narrative: Narrative): Narrative[] {
    return Array.isArray(narrative.choices)
      ? // https://github.com/facebook/flow/issues/1414
        narrative.choices
          .map((id: NarrativeId) => this.find(id))
          .filter(Boolean)
      : []
  }
}

// TODO: rename file store.js
export const save = (narratives: ?(Narrative[])): NarrativeStore =>
  new NarrativeStore(narratives)
