import { DynamicStructuredTool } from '@langchain/core/tools'
import { z } from 'zod'

export const WORKSHEET_TOOL = 'worksheetCreator'
export interface Worksheet {
  firstQuestion: {
    question: string
    answer: string
  }
  multipleChoiceQuestions: {
    question: string
    answer1: string
    answer2: string
    answer3: string
    solution: string
  }[]
  trueFalseStatements: {
    statement: string
    isTrue: boolean
  }[]
  writeMultiple: {
    question: string
    answers: string[]
  }
  nameOfText: string
  referenceInBook: string
  id: string
  level: number
}

export const worksheetTool = new DynamicStructuredTool({
  name: WORKSHEET_TOOL,
  description: 'Erstelle ein Arbeitsblatt mit Fragen und Antworten',
  schema: z.object({
    firstQuestion: z.object({
      question: z
        .string()
        .describe(
          'Eine einfache Frage, die direkt aus dem Text hervorgeht und keine zusätzlichen Informationen erfordert.',
        ),
      answer: z.string().describe('Die Antwort auf die Frage'),
    }),
    multipleChoiceQuestions: z
      .array(
        z.object({
          question: z
            .string()
            .describe(
              'Eine einfache Frage, die direkt aus dem Text hervorgeht und keine zusätzlichen Informationen erfordert.',
            ),
          answer1: z.string().describe('Die erste Antwortmöglichkeit'),
          answer2: z.string().describe('Die zweite Antwortmöglichkeit'),
          answer3: z.string().describe('Die dritte Antwortmöglichkeit'),
          solution: z.string().describe('Die richtige Antwort'),
        }),
      )
      .length(2),
    trueFalseStatements: z
      .array(
        z.object({
          statement: z.string().describe('Eine einfache Aussage über den Text'),
          isTrue: z.boolean().describe('Ist die Aussage wahr?'),
        }),
      )
      .length(3),
    writeMultiple: z
      .object({
        question: z.string().describe('Die Frage'),
        answers: z.array(z.string()).describe('Die Antworten'),
      })
      .describe(
        'Eine Frage bei der die Aufgabe ist mehrere Aspekte zu nennen. Zum Beispiel: Nenne 2 Tiere die im Text vorkommen.',
      ),
  }),
  func: async () => ``,
} as any)
