import { useState } from 'react'
import { Field, Input, Label } from '@headlessui/react'

export default function QuestionAnswerValidator({
  question,
  answer,
  onSubmit,
  title,
}: {
  question: string
  answer: string
  onSubmit: (question: string, answer: string) => void
  title: string
}) {
  const [currentQuestion, setCurrentQuestion]: [string, (q: string) => void] =
    useState(question)
  const [currentAnswer, setCurrentAnswer]: [string, (a: string) => void] =
    useState(answer)

  const updateQuestion = (question: string) => {
    setCurrentQuestion(question)
    onSubmit(question, currentAnswer)
  }

  const updateAnswer = (answer: string) => {
    setCurrentAnswer(answer)
    onSubmit(currentQuestion, answer)
  }

  return (
    <div className="flex flex-col w-full px-10 pt-3 pb-5 bg-gray-100 rounded-2xl my-5">
      <h3 className="font-bold text-xl pb-3 -ml-2">{title}</h3>
      <Field className="grid grid-cols-6 w-full">
        <Label className="col-span-6 md:col-span-1 font-semibold">Frage</Label>
        <Input
          value={currentQuestion}
          onChange={(e) => updateQuestion(e.target.value)}
          className="col-span-6 md:col-span-5 px-2 pb-1 border-b-2 h-8 resize-none mb-4"
        />
        <Label className="col-span-6 md:col-span-1 font-semibold">
          Antwort
        </Label>
        <Input
          value={currentAnswer}
          onChange={(e) => updateAnswer(e.target.value)}
          className="col-span-6 md:col-span-5 px-2 pb-1 border-b-2 h-8 resize-none"
        />
      </Field>
    </div>
  )
}
