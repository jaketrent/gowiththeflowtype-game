// @flow

import type { Id } from '../common/types'

export type NarrativeId = Id

export type Narrative = {
  id: NarrativeId,
  choiceText?: string,
  choices?: NarrativeId[],
  text: string,
  prompt?: string
}
