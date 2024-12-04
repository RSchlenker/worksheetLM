import { useState } from 'react'
import { Worksheet } from '../actions/tools/WorksheetTool'
import TrueFalseStatementForm from './TrueFalseStatementForm'

export default function TrueFalseStatementsForm({
  statements,
  onSubmit,
  title,
}: {
  statements: Worksheet['trueFalseStatements']
  onSubmit: (question: Worksheet['trueFalseStatements']) => void
  title: string
}) {
  const [currentStatements, setCurrentStatements]: [
    Worksheet['trueFalseStatements'],
    (c: Worksheet['trueFalseStatements']) => void,
  ] = useState(statements)

  const updateCurrentStatements = (
    newStatement: Worksheet['trueFalseStatements'][0],
    index: number,
  ) => {
    let newStatements = statements.map((s, i) =>
      i === index ? newStatement : s,
    )
    setCurrentStatements(newStatements)
    onSubmit(newStatements)
  }

  return (
    <div className="flex flex-col w-full px-10 pt-3 pb-5 bg-gray-100 rounded-2xl my-5">
      <h3 className="font-bold text-xl pb-3 -ml-2">{title}</h3>
      {currentStatements.map((statement, index) => {
        return (
          <div key={index}>
            <TrueFalseStatementForm
              question={statement.statement}
              isTrue={statement.isTrue}
              onSubmit={(newStatement) =>
                updateCurrentStatements(newStatement, index)
              }
            />
          </div>
        )
      })}
    </div>
  )
}
