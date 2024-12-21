import { useState } from 'react'
import { Worksheet } from '../actions/tools/WorksheetTool'
import SimpleQuestionForm from './QuestionAnswerValidator'
import MultipleChoiceQuestionForm from './MultipleChoiceQuestionForm'
import TrueFalseStatementsForm from './TrueFalseStatementsForm'
import WriteMultipleForm from './WriteMultipleForm'
import { Button } from '@headlessui/react'
import WorksheetMetadataForm from './WorksheetMetadataForm'

export default function SimpleWorksheetValidator({
  onSubmit,
  worksheet,
}: {
  onSubmit: (worksheet: Worksheet) => void
  worksheet: Worksheet
}) {
  const [_, setFirstQuestion] = useState(worksheet.firstQuestion.question)
  const [multipleChoiceQuestions, setMultipleChoiceQuestions] = useState(
    worksheet.multipleChoiceQuestions,
  )
  const [trueFalseStatements, setTrueFalseStatements] = useState(
    worksheet.trueFalseStatements,
  )
  const [level, setLevel] = useState(worksheet.level)
  const [textReference, setTextReference] = useState(worksheet.referenceInBook)
  const [updatedWorksheet, setUpdatedWorksheet] = useState(worksheet)

  const updateFirstQuestion = (question: string, answer: string) => {
    const newWorksheet = {
      ...worksheet,
      firstQuestion: { question, answer },
    }
    setFirstQuestion(question)
    setUpdatedWorksheet(newWorksheet)
  }
  const updateMultipleChoiceQuestion = (
    question: Worksheet['multipleChoiceQuestions'][0],
    index: number,
  ) => {
    let newQuestions = multipleChoiceQuestions.map((q, i) =>
      i === index ? question : q,
    )
    setMultipleChoiceQuestions(newQuestions)
    const newWorksheet = {
      ...worksheet,
      multipleChoiceQuestions: newQuestions,
    }
    setUpdatedWorksheet(newWorksheet)
  }
  const updateTrueFalseStatements = (
    statements: Worksheet['trueFalseStatements'],
  ) => {
    setTrueFalseStatements(statements)
    const newWorksheet = {
      ...worksheet,
      trueFalseStatements: statements,
    }
    setUpdatedWorksheet(newWorksheet)
  }
  const updateWriteMultiple = (question: Worksheet['writeMultiple']) => {
    const newWorksheet = {
      ...worksheet,
      writeMultiple: question,
    }
    setUpdatedWorksheet(newWorksheet)
  }
  const updateMetadata = (
    name: string,
    textReference: string,
    level: number,
  ) => {
    console.log('updateMetadata', name, textReference, level)
    const newWorksheet = {
      ...worksheet,
      nameOfText: name,
      referenceInBook: textReference,
      level: level,
    }
    setUpdatedWorksheet(newWorksheet)
  }

  return (
    <div>
      <div className="max-h-[60vh] overflow-scroll rounded-2xl border-2 border-gray-400">
        <SimpleQuestionForm
          title="Einstiegsfrage"
          question={worksheet.firstQuestion.question}
          answer={worksheet.firstQuestion.answer}
          onSubmit={updateFirstQuestion}
        />
        <MultipleChoiceQuestionForm
          title="1. Multiple Choice Frage"
          question={worksheet.multipleChoiceQuestions[0]}
          onSubmit={(newQuestion) => {
            updateMultipleChoiceQuestion(newQuestion, 0)
          }}
        />
        <TrueFalseStatementsForm
          title="Wahr/Falsch Aussagen"
          statements={trueFalseStatements}
          onSubmit={updateTrueFalseStatements}
        />
        <WriteMultipleForm
          title="'Nenne mehrere' Frage"
          question={worksheet.writeMultiple}
          onSubmit={(newWriteMultiple) => {
            updateWriteMultiple(newWriteMultiple)
          }}
        />
        <MultipleChoiceQuestionForm
          title="2. Multiple Choice Frage"
          question={worksheet.multipleChoiceQuestions[1]}
          onSubmit={(newQuestion) => {
            updateMultipleChoiceQuestion(newQuestion, 1)
          }}
        />
        <WorksheetMetadataForm
          onChange={updateMetadata}
          level={worksheet.level}
          name={worksheet.nameOfText}
          textReference={worksheet.referenceInBook}
        />
      </div>
      <div className="flex">
        <Button
          className="h-14 bg-cyan-700 hover:bg-cyan-400 ml-auto mt-3 w-40 text-2xl font-semibold rounded-2xl text-white"
          onClick={() => onSubmit(updatedWorksheet)}
        >
          Speichern
        </Button>
      </div>
    </div>
  )
}
