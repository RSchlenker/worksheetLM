import { useState } from 'react'
import { Field, Label, Switch, Textarea } from '@headlessui/react'
import { Worksheet } from '../actions/tools/WorksheetTool'

export default function TrueFalseStatementForm({
  question,
  isTrue,
  onSubmit,
}: {
  question: string
  isTrue: boolean
  onSubmit: (statement: Worksheet['trueFalseStatements'][0]) => void
}) {
  const [currentStatement, setCurrentStatement]: [string, (s: string) => void] =
    useState(question)

  const [currentStatementIsTrue, setCurrentStatementIsTrue]: [
    boolean,
    (isTrue: boolean) => void,
  ] = useState(isTrue)

  const updateStatement = (newStatement: string) => {
    setCurrentStatement(newStatement)
    onSubmit({
      isTrue: currentStatementIsTrue,
      statement: newStatement,
    } as Worksheet['trueFalseStatements'][0])
  }

  const updateIsTrue = (newIsTrue: boolean) => {
    setCurrentStatementIsTrue(newIsTrue)
    onSubmit({
      isTrue: newIsTrue,
      statement: currentStatement,
    } as Worksheet['trueFalseStatements'][0])
  }

  return (
    <div className="flex flex-col w-full p-2">
      <Field className="grid grid-cols-6 w-full">
        <Label className="col-span-1 font-semibold">Aussage</Label>
        <Textarea
          value={currentStatement}
          onChange={(e) => updateStatement(e.target.value)}
          className="col-span-5 px-2 pb-1 border-b-2 h-8 resize-none mb-1"
        />
        <Label className="col-span-1 font-semibold">
          {isTrue ? 'Wahr' : 'Falsch'}
        </Label>
        <Switch
          checked={currentStatementIsTrue}
          onChange={updateIsTrue}
          className="group relative flex h-7 w-[3.75rem] cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none border-2 hover:bg-cyan-400"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none -translate-y-0.5 inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
          />
        </Switch>
      </Field>
    </div>
  )
}
