import LevelSelector from './LevelSelector'
import { Field, Label, Textarea } from '@headlessui/react'
import { useEffect, useState } from 'react'

export default function WorksheetMetadataForm({
  onChange,
  level,
  name,
  textReference,
}: {
  onChange: (name: string, textReference: string, level: number) => void
  level: number
  name: string
  textReference: string
}) {
  const [currentLevel, setLevel] = useState(level)
  const [currentName, setName] = useState(name)
  const [currentTextReference, setTextReference] = useState(textReference)
  const updateLevel = (newLevel: number) => {
    setLevel(newLevel)
    onChange(currentName, currentTextReference, newLevel)
  }
  const updateName = (newName: string) => {
    setName(newName)
    onChange(newName, currentTextReference, currentLevel)
  }
  const updateTextReference = (newTextReference: string) => {
    setTextReference(newTextReference)
    onChange(currentName, newTextReference, currentLevel)
  }
  return (
    <div className="flex flex-col w-full px-10 pt-3 bg-gray-100 rounded-2xl my-5">
      <h3 className="font-bold text-xl pb-3 -ml-2">
        Details des Arbeitsblattes
      </h3>
      <LevelSelector onChange={updateLevel} initialLevel={level} />
      <Field className="grid grid-cols-6 w-full mt-4">
        <Label className="col-span-1 font-semibold">Referenz im Buch</Label>
        <Textarea
          value={currentTextReference}
          placeholder={'z.B. LB S. 18/19'}
          onChange={(e) => updateTextReference(e.target.value)}
          className="col-span-5 px-2 pb-1 border-b-2 h-8 resize-none mb-4"
        />
      </Field>
      <Field className="grid grid-cols-6 w-full">
        <Label className="col-span font-semibold">Titel des Textes</Label>
        <Textarea
          value={currentName}
          placeholder={'z.B. Zehn Blätter fliegen davon'}
          onChange={(e) => updateName(e.target.value)}
          className="col-span-5 px-2 pb-1 border-b-2 h-8 resize-none"
        />
      </Field>
    </div>
  )
}
