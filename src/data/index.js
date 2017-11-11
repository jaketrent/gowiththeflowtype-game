// @flow

import type { Narrative, NarrativeId } from '../narratives/types'

type RawData = {
  narratives: RawNarrative[]
}

type RawNarrative = {
  id: NarrativeId,
  choiceText?: string,
  choices?: NarrativeId[]
}

const rawData: RawData = {
  narratives: [
    { id: 1, choices: [2, 3] },
    { id: 2, choiceText: 'An anxious boy' },
    { id: 3, choiceText: 'Woman shopping' }
  ]
}

export default rawData
