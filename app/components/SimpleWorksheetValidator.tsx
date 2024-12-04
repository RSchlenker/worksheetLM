import { Field, Label, Textarea } from '@headlessui/react'
import { useState } from 'react'
import { Worksheet } from '../actions/tools/WorksheetTool'

export default function SimpleWorksheetValidator({
  onSubmit,
  worksheet,
}: {
  onSubmit: (worksheet: Worksheet) => void
  worksheet: Worksheet
}) {
  const [firstQuestion, setFirstQuestion] = useState(
    worksheet.firstQuestion.question,
  )
  const [multipleChoiceQuestions, setMultipleChoiceQuestions] = useState(
    worksheet.multipleChoiceQuestions,
  )
  const [trueFalseStatements, setTrueFalseStatements] = useState(
    worksheet.trueFalseStatements,
  )
  const [writeMultiple, setWriteMultiple] = useState(
    worksheet.writeMultiple.question,
  )

  const updateFirstQuestion = (question: string) => {
    const newWorksheet = {
      ...worksheet,
      firstQuestion: {
        question,
        answer: worksheet.firstQuestion.answer,
      },
    }
    setFirstQuestion(question)
    onSubmit(newWorksheet)
  }
  const updateMultipleChoiceQuestion = (question: string, index: number) => {
    let newQuestions = multipleChoiceQuestions.map((q, i) =>
      i === index ? { ...q, question } : q,
    )
    setMultipleChoiceQuestions(newQuestions)
    const newWorksheet = {
      ...worksheet,
      multipleChoiceQuestions: newQuestions,
    }
    onSubmit(newWorksheet)
  }
  const updateTrueFalseStatement = (statement: string, index: number) => {
    let newStatements = trueFalseStatements.map((s, i) =>
      i === index ? { ...s, statement } : s,
    )
    setTrueFalseStatements(newStatements)
    const newWorksheet = {
      ...worksheet,
      trueFalseStatements: newStatements,
    }
    onSubmit(newWorksheet)
  }
  const updateWriteMultiple = (question: string) => {
    const newWorksheet = {
      ...worksheet,
      writeMultiple: {
        question,
        answers: worksheet.writeMultiple.answers,
      },
    }
    setWriteMultiple(question)
    onSubmit(newWorksheet)
  }

  return (
    <div>
      <h1>WorksheetValidator</h1>
      <Field>
        <Label className="">Erste Frage</Label>
        <Textarea
          value={firstQuestion}
          onChange={(e) => updateFirstQuestion(e.target.value)}
          className="w-full flex flex-grow h-12 border-2 rounded-lg focus:outline-none focus:shadow-outline p-2 resize-none"
        />
      </Field>
      <h2>Multiple Choice Fragen</h2>
      {multipleChoiceQuestions.map((question, index) => (
        <Field key={index}>
          <Label className="">Frage</Label>
          <Textarea
            value={question.question}
            onChange={(e) =>
              updateMultipleChoiceQuestion(e.target.value, index)
            }
            className="w-full flex flex-grow h-12 border-2 rounded-lg focus:outline-none focus:shadow-outline p-2 resize-none"
          />
        </Field>
      ))}

      <h2>Wahr/Falsch Fragen</h2>
      {trueFalseStatements.map((statement, index) => (
        <Field key={index}>
          <Label className="">Aussage</Label>
          <Textarea
            value={statement.statement}
            onChange={(e) => updateTrueFalseStatement(e.target.value, index)}
            className="w-full flex flex-grow h-12 border-2 rounded-lg focus:outline-none focus:shadow-outline p-2 resize-none"
          />
        </Field>
      ))}

      <Field>
        <Label className="">Nenne mehrere</Label>
        <Textarea
          value={writeMultiple}
          onChange={(e) => updateWriteMultiple(e.target.value)}
          className="w-full flex flex-grow h-12 border-2 rounded-lg focus:outline-none focus:shadow-outline p-2 resize-none"
        />
      </Field>
    </div>
  )
}
