// @flow

import type { Narrative, NarrativeId } from '../narratives/types'

type RawData = {
  narratives: RawNarrative[]
}

type RawNarrative = {
  id: NarrativeId,
  choiceText?: string,
  choices?: NarrativeId[],
  text: string
}

const rawData: RawData = {
  narratives: [
    {
      id: 1,
      text:
        'Welcome to your adventure!  The future is bright.  You will meet it as:',
      choices: [2, 3]
    },
    {
      id: 2,
      text:
        "You've accepted your anxious self.  Are you wondering what's next?",
      choiceText: 'An anxious boy'
    },
    {
      id: 3,
      text:
        'Shopping can be fun.  But bigger destinations await.  You contemplate something greater.',
      choiceText: 'Woman shopping'
    }
  ]
}

export default rawData
