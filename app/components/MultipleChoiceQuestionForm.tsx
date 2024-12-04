import { useState } from 'react'
import { Field, Label, Textarea } from '@headlessui/react'
import { Worksheet } from '../actions/tools/WorksheetTool'

export default function MultipleChoiceQuestionForm({
  question,
  onSubmit,
  title,
}: {
  question: Worksheet['multipleChoiceQuestions'][0]
  onSubmit: (question: Worksheet['multipleChoiceQuestions'][0]) => void
  title: string
}) {
  const [currentQuestion, setCurrentQuestion]: [string, (q: string) => void] =
    useState(question.question)
  const [currentAnswer1, setCurrentAnswer1]: [string, (a: string) => void] =
    useState(question.answer1)
  const [currentAnswer2, setCurrentAnswer2]: [string, (a: string) => void] =
    useState(question.answer2)
  const [currentAnswer3, setCurrentAnswer3]: [string, (a: string) => void] =
    useState(question.answer3)

  const getCurrentWorksheet = () => {
    return {
      question: currentQuestion,
      answer1: currentAnswer1,
      answer2: currentAnswer2,
      answer3: currentAnswer3,
    } as Worksheet['multipleChoiceQuestions'][0]
  }

  const updateQuestion = (newQuestion: string) => {
    setCurrentQuestion(newQuestion)
    onSubmit({
      ...getCurrentWorksheet(),
      question: newQuestion,
    } as Worksheet['multipleChoiceQuestions'][0])
  }

  const updateAnswer1 = (answer: string) => {
    setCurrentAnswer1(answer)
    onSubmit({
      ...getCurrentWorksheet(),
      answer1: answer,
    })
  }

  const updateAnswer2 = (answer: string) => {
    setCurrentAnswer2(answer)
    onSubmit({
      ...getCurrentWorksheet(),
      answer2: answer,
    })
  }
  const updateAnswer3 = (answer: string) => {
    setCurrentAnswer3(answer)
    onSubmit({
      ...getCurrentWorksheet(),
      answer3: answer,
    })
  }

  return (
    <div className="flex flex-col w-full px-10 pt-3 pb-5 bg-gray-100 rounded-2xl my-5">
      <h3 className="font-bold text-xl pb-3 -ml-2">{title}</h3>
      <Field className="grid grid-cols-6 w-full">
        <Label className="col-span-1 font-semibold">Frage</Label>
        <Textarea
          value={currentQuestion}
          onChange={(e) => updateQuestion(e.target.value)}
          className="col-span-5 px-2 pb-1 border-b-2 h-8 resize-none mb-4"
        />
        <Label className="col-span-1 font-semibold">Antwort 1</Label>
        <Textarea
          value={currentAnswer1}
          onChange={(e) => updateAnswer1(e.target.value)}
          className="col-span-5 px-2 pb-1 border-b-2 h-8 resize-none mb-1"
        />
        <Label className="col-span-1 font-semibold">Antwort 2</Label>
        <Textarea
          value={currentAnswer2}
          onChange={(e) => updateAnswer2(e.target.value)}
          className="col-span-5 px-2 pb-1 border-b-2 h-8 resize-none mb-1"
        />
        <Label className="col-span-1 font-semibold">Antwort 3</Label>
        <Textarea
          value={currentAnswer3}
          onChange={(e) => updateAnswer3(e.target.value)}
          className="col-span-5 px-2 pb-1 border-b-2 h-8 resize-none"
        />
      </Field>
    </div>
  )
}
