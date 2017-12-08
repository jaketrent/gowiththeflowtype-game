// @flow

import type { Narrative, NarrativeId } from '../narratives/types'

type RawData = {
  narratives: RawNarrative[]
}

type RawNarrative = {
  id: NarrativeId,
  choiceText?: string,
  choices?: NarrativeId[],
  text: string,
  prompt?: string
}

const rawData: RawData = {
  narratives: [
    {
      id: 0,
      text:
        'The rule of King Glitmore was certain.  The empire he watched over had spread amongst the stars.  That quadrant of the galaxy was a haven of peace and prosperty for years.',
      choices: [1, 2],
      prompt: 'But not everything is certain:'
    },
    {
      id: 1,
      text:
        'As the generations passed and life was secure for virtually all the people in the kingdom, many forgot the old ways of work and invention that had brought the kingdom to this golden age.',
      choices: [3, 4],
      prompt: 'They left themselves to:',
      choiceText: 'Sometimes prosperty leads a people into apathy.'
    },
    {
      id: 2,
      text:
        'There is nothing men crave more than power, and the kingdom had grown in power greatly over the last 400 hundred years.  So the surprise of what happened next wore off quickly.',
      choices: [21, 22],
      prompt: 'From among the people arose:',
      choiceText: 'There are some who see greatness and seek it for themselves.'
    },
    {
      id: 3,
      text:
        'But soon that would all change.  For while the kingdom slept, those from without determined to take it for themselves.  The cyborg piggies from the far end of the glalaxy were uneasy and looked for a fight.',
      choices: [5, 6],
      prompt: 'If they could:',
      choiceText:
        'Barely being useful, merely living off of the fruits of those that came before them.'
    },
    {
      id: 4,
      text:
        'Others soon noticed the greatness of the kingdom and wanted it for their own.  The neighboring planets were home to the outcast clan of Cyborg Piggies. ',
      choices: [41, 42],
      prompt: "They heard the pomp and circumstance of Glitmore's kingdom and:",
      choiceText:
        'Glorying loudly in their greatness, without the slightest clue about how it had been made.'
    },
    {
      id: 5,
      text:
        'They devised a plan to steal the king from atop his very throne.  And soon, they struck!  Without hint or warning, the pigs infiltrated the Royal Castle of the Stars and plucked the king from out of the midst of his subjects.',
      choices: [7, 8],
      prompt: 'Where he went, no one knew, so they called upon:',
      choiceText:
        'Take the kingdom for themselves, they would be its next rulers.'
    },
    {
      id: 6,
      text: '',
      choices: [],
      prompt: '',
      choiceText:
        'Trick the king and the kingdom into giving up what they had, they would become the new heirs to the kingdom.'
    },
    {
      id: 7,
      text:
        'The Future Knights were a band of loyal brothers who had sworn to protect the king.  Having utterly failed most recently, they were eager to reclaim the king and their own honor.',
      choices: [9, 10],
      prompt: 'Launching into action, soon their investigation found:',
      choiceText:
        'The only group still active and loyal to the king, the Future Knights.'
    },
    {
      id: 8,
      text: '',
      choices: [],
      prompt: '',
      choiceText:
        'The royal Star Seekers to divine the location of the missing King Glitmore.'
    },
    {
      id: 9,
      text:
        'Soon the cook talked, being forced to eat fake chicken nuggets until he was too ill to resist.',
      choices: [11, 12],
      prompt: 'The cook told the knights:',
      choiceText:
        'A traitor amongst the kitchen staff, who had administered poisoned space food to the castle guard, allowing the piggies to slip through.'
    },
    {
      id: 10,
      text: '',
      choices: [],
      prompt: '',
      choiceText:
        'A hastily-scrawled note from one of the late witnesses to the king-napping.  The cyborg piggies were identified as the perpetrators.'
    },
    {
      id: 11,
      text:
        "Once in their ship, the Knights donned their gear, readying themselves to give battle when the met the sorry pigs.  Soon the cyborg's ship was in sight.",
      choices: [13, 14],
      prompt: 'The Knights gave chase and:',
      choiceText:
        'The route by which the cyborg pigs were taking the king.  The Knights raced to intercept them.'
    },
    {
      id: 12,
      text: '',
      choices: [],
      prompt: '',
      choiceText:
        'What they wanted to hear -- the location of the king -- but it was far too distant for them to immediately confirm.'
    },
    {
      id: 13,
      text:
        'Downed on the planet, the pigs quickly spread out, hiding the King in their ranks.  Their plan may have been interrupted, but they would not relinquish the king without a fight!  The Knights were ready!',
      choiceText:
        'Opened fire, shooting down the ship, which crash landed on a nearby planet.'
    },
    {
      id: 14,
      text: '',
      choices: [],
      prompt: '',
      choiceText:
        'Found themselves unable to catch up in time before they reached the Cyborg Piggy homeworld.'
    },
    {
      id: 21,
      text: 'When the son rose up against his Father, it was sudden.  ',
      choices: [23, 24],
      prompt: 'Confronted with betrayal within his own family, the King:',
      choiceText:
        "The son of the King.  He was vain and sought a station like his father's."
    },
    {
      id: 22,
      text: '',
      choices: [],
      prompt: '',
      choiceText:
        'A band of men who felt slighted by the meteoric rise of some -- to which group they saw themselves as wrongfully excluded.'
    },
    {
      id: 23,
      text:
        'But his son was blinded to the love of his father for him and the kingdom.  He sought power and would have it.  He reveal his cunning accomplices, the Cyborg Pigs for the Sty system.  They appeared and whisked the King away',
      choices: [25, 26],
      prompt: 'But not before he:',
      choiceText:
        'Sought to change the mind of his son and pled with him to reconsider'
    },
    {
      id: 24,
      text: '',
      choices: [],
      prompt: '',
      choiceText: 'Attempted to fight back.'
    },
    {
      id: 25,
      text:
        'The Future Knights, who had been pumping Space Iron in their Future Lair, heard the call for help, and that call only came for one person.  They jumped for their gear and made their way to the royal castle.',
      choices: [27, 28],
      prompt: 'On the way:',
      choiceText: 'Sent a call to his own honor guard, the Future Nights.'
    },
    {
      id: 26,
      text: '',
      choices: [],
      prompt: '',
      choiceText: 'Engaged his own personal galactic location beacon.'
    },
    {
      id: 27,
      text:
        'But when they arrived, the lazer swords were useless, for the thrown room was empty.  Just then, however, they received an urgent message from planetary air traffic control, indicating an unauthorized depature of several Cyborg Pig ships.',
      choices: [29, 30],
      prompt: 'Without missing a beat, they:',
      choiceText:
        'They calibrated their weapons, readying lazer swords for the inevitable fight ahead.'
    },
    {
      id: 28,
      text: '',
      choices: [],
      prompt: '',
      choiceText:
        'Called planetary air traffic control, ordering them to shut down all air traffic off planet.'
    },
    {
      id: 29,
      text:
        'It would be a quick chase.  The Future Knights knew the Cyborg Pigs were cunning but slow.  Soon they caught up with the ship and hailed it.',
      choices: [31, 32],
      prompt: 'Their mere presence of the Knights:',
      choiceText: 'Reentered their ship and began pursuit'
    },
    {
      id: 30,
      text: '',
      choices: [],
      prompt: '',
      choiceText: 'Asked air traffic control to plot the course of the prey'
    },
    {
      id: 31,
      text:
        "The Cyborg Pigs begged for mercy and brought their ship down on a barrent planet nearby.  But it was a trap!  For as soon as they had disembarked their ships, the King was no where to be seen.  But the King's son was there!",
      choices: [33, 34],
      prompt:
        'The Knights were at first overcome with surprise and betrayal, but soon:',
      choiceText: 'Was enough to make the Pigs lose their nerve.'
    },
    {
      id: 32,
      text: '',
      choices: [],
      prompt: '',
      choiceText:
        'Propelled the Cyborgs onward.  They could not be caught and meet that fate.'
    },
    {
      id: 33,
      text:
        'The Future Knights knew what they had to do.  They spread out, approaching the Pigs from all directions.  The King would be found, and the Knights would return him to the kingdom.',
      choiceText: 'Composed themselves to fight the ranks of Cyborg Pigs.'
    },
    {
      id: 34,
      text: '',
      choices: [],
      prompt: '',
      choiceText:
        "Informed the King's son that they would avenge the King of this dead no matter the perpetrators."
    },
    {
      id: 41,
      text:
        'They devised a plan to steal the king from atop his very throne.  And soon, they struck!  Without hint or warning, the pigs infiltrated the Royal Castle of the Stars and plucked the king from out of the midst of his subjects.', // #5
      choices: [7, 8],
      prompt: '',
      choiceText:
        'Decided the removing him from his throne would bring the citizens some needed humility.'
    },
    {
      id: 42,
      text:
        'The Cyborg Pigs met in secret and devised a way to gain audience with the King.  One day as he sat alone in his chambers, the Pigs spoke from the shadows.  The King was startled, then listened,',
      choices: [43, 44],
      prompt: 'as they:',
      choiceText: "Wished Glitmore's wise rule for themselves."
    },
    {
      id: 43,
      text:
        'The King had grown weary, but he knew his duty was to his people.  He could never leave them.  He knew rejecting the Pigs outright would bring their ire,',
      choices: [45, 46],
      prompt: 'so he:',
      choiceText:
        'Enticed the King away from his tiresome, centuries-long rule.'
    },
    {
      id: 44,
      text: '',
      choices: [],
      prompt: '',
      choiceText:
        'Told him of the wonders of the Cyborgs and the kingdom to be had in the Sty system.'
    },
    {
      id: 45,
      text:
        'The Pigs were indeed very offended by his refusal.  But they had a backup plan themselves and stole him away to their ship.',
      choices: [25, 26],
      prompt: 'Before he boarded, he:',
      choiceText:
        'Attempted to dissuade them from their plan, telling them it was folly.'
    },
    {
      id: 46,
      text:
        'The Future Knights, who had been pumping Space Iron in their Future Lair, heard the call for help, and that call only came for one person.  They jumped for their gear and made their way to the royal castle.', // #25
      choices: [27, 28],
      prompt: '',
      choiceText: "Thought he'd better bring in backup and sent out the call."
    }
  ]
}

export default rawData
