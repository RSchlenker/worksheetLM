import { Field, Label, Textarea } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { Worksheet } from '../actions/tools/WorksheetTool'
import { RootState, useAppSelector } from '../../store/store'
import WorksheetViewer from './WorksheetGenerator/WorksheetViewer'

export default function WorksheetValidator() {
  const [firstQuestion, setFirstQuestion] = useState('')
  const [multipleChoiceQuestions, setMultipleChoiceQuestions] = useState([])
  const [trueFalseStatements, setTrueFalseStatements] = useState([])
  const [writeMultiple, setWriteMultiple] = useState('')
  const [currentWorksheet, setCurrentWorksheet] = useState({} as Worksheet)

  const worksheets: Worksheet[] = useAppSelector(
    (state: RootState) => state.worksheet.worksheets,
  )

  useEffect(() => {
    if (worksheets.length === 0) return
    const lastWorksheet = worksheets[worksheets.length - 1]
    setCurrentWorksheet(lastWorksheet)
    setFirstQuestion(lastWorksheet.firstQuestion.question)
    setMultipleChoiceQuestions(lastWorksheet.multipleChoiceQuestions)
    setTrueFalseStatements(lastWorksheet.trueFalseStatements)
    setWriteMultiple(lastWorksheet.writeMultiple.question)
  }, [worksheets])

  const onFieldChange = () => {
    const lastWorksheet = worksheets[worksheets.length - 1]
    const newWorksheet = {
      firstQuestion: {
        question: firstQuestion,
        answer: lastWorksheet.firstQuestion.answer,
      },
      multipleChoiceQuestions,
      trueFalseStatements,
      writeMultiple: {
        question: writeMultiple,
        answers: lastWorksheet.writeMultiple.answers,
      },
      id: lastWorksheet.id,
      nameOfText: lastWorksheet.nameOfText,
      referenceInBook: lastWorksheet.referenceInBook,
    } as Worksheet
    setCurrentWorksheet(newWorksheet)
  }

  const changeFirstQuestion = (e) => {
    setFirstQuestion(e.target.value)
    console.log('firstQuestion:', firstQuestion)
    onFieldChange()
  }

  return (
    <div>
      <h1>WorksheetValidator</h1>
      <Field>
        <Label className="">Erste Frage</Label>
        <Textarea
          value={firstQuestion}
          onChange={changeFirstQuestion}
          className="w-full flex flex-grow h-12 border-2 rounded-lg focus:outline-none focus:shadow-outline p-2 resize-none"
        />
      </Field>
      <h2>Multiple Choice Fragen</h2>
      {multipleChoiceQuestions.map((question, index) => (
        <Field key={index}>
          <Label className="">Frage</Label>
          <Textarea
            value={question.question}
            onChange={(e) => {
              const copyOfQuestions = [...multipleChoiceQuestions]
              copyOfQuestions[0].question = 'sdsd'
              const newQuestions = [...multipleChoiceQuestions]
              newQuestions[index].question = e.target.value
              setMultipleChoiceQuestions(newQuestions)
              onFieldChange()
            }}
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
            onChange={(e) => {
              const newStatements = [...trueFalseStatements]
              newStatements[index].statement = e.target.value
              setTrueFalseStatements(newStatements)
            }}
            className="w-full flex flex-grow h-12 border-2 rounded-lg focus:outline-none focus:shadow-outline p-2 resize-none"
          />
        </Field>
      ))}

      <Field>
        <Label className="">Nenne mehrere</Label>
        <Textarea
          value={writeMultiple}
          onChange={(e) => {
            setWriteMultiple(e.target.value)
            onFieldChange()
          }}
          className="w-full flex flex-grow h-12 border-2 rounded-lg focus:outline-none focus:shadow-outline p-2 resize-none"
        />
      </Field>
      <WorksheetViewer worksheet={currentWorksheet} />
    </div>
  )
}
