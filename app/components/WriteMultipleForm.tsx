import { useState } from 'react'
import { Field, Label, Textarea } from '@headlessui/react'
import { Worksheet } from '../actions/tools/WorksheetTool'

export default function WriteMultipleForm({
  question,
  onSubmit,
  title,
}: {
  question: Worksheet['writeMultiple']
  onSubmit: (question: Worksheet['writeMultiple']) => void
  title: string
}) {
  const [currentQuestion, setCurrentQuestion]: [string, (q: string) => void] =
    useState(question.question)
  const [currentAnswers, setCurrentAnswers]: [string[], (a: string[]) => void] =
    useState(question.answers)

  const updateAnswer = (answer: string, index: number) => {
    let newAnswers = currentAnswers.map((a, i) => (i === index ? answer : a))
    setCurrentAnswers(newAnswers)
    onSubmit({
      question: currentQuestion,
      answers: newAnswers,
    })
  }

  const updateQuestion = (newQuestion: string) => {
    setCurrentQuestion(newQuestion)
    onSubmit({
      answers: currentAnswers,
      question: newQuestion,
    })
  }

  return (
    <div className="flex flex-col w-full px-10 pt-3 pb-5 bg-gray-100 rounded-2xl my-5">
      <h3 className="font-bold text-xl pb-3 -ml-2">{title}</h3>
      <Field className="grid grid-cols-6 w-full">
        <Label className="col-span-6 md:col-span-1 font-semibold">Frage</Label>
        <Textarea
          value={currentQuestion}
          onChange={(e) => updateQuestion(e.target.value)}
          className="col-span-6 md:col-span-5 px-2 pb-1 border-b-2 h-8 resize-none mb-4"
        />
        {currentAnswers.map((answer, index) => {
          return (
            <template key={index}>
              <Textarea
                value={answer}
                onChange={(e) => updateAnswer(e.target.value, index)}
                className="col-span-6 md:col-span-5 px-2 pb-1 border-b-2 h-8 resize-none mb-1"
              />
            </template>
          )
        })}
      </Field>
    </div>
  )
}
