import { Field, Label, Textarea } from '@headlessui/react'
import { useState } from 'react'
import { askChatGPT } from './actions/openAIAction'
import { useAppDispatch } from '../store/store'
import LoadingButton from './components/LoadingButton'
import { addWorksheet } from '../store/worksheetSlice'
import { Worksheet } from './actions/tools/WorksheetTool'
import LevelSelector from './components/LevelSelector'

export default function WorksheetForm() {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [textReference, setTextReference] = useState('')
  const [level, setLevel] = useState<number>(3)
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const onConfirm = async () => {
    setLoading(true)
    const response: Worksheet = await askChatGPT(
      text,
      title,
      textReference,
      level,
    )
    // @ts-ignore
    dispatch(addWorksheet(response))
    setLoading(false)
  }
  return (
    <div className="p-8 flex flex-col gap-5">
      <Field>
        <Label className="">Titel des Arbeitsblatts</Label>
        <Textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={'z.B. Zehn Blätter fliegen davon'}
          className="w-full flex flex-grow h-12 border-2 rounded-lg focus:outline-none focus:shadow-outline p-2 resize-none"
        />
      </Field>
      <Field>
        <Label className="">Wo findet sich der Text im Buch?</Label>
        <Textarea
          value={textReference}
          onChange={(e) => setTextReference(e.target.value)}
          placeholder={'z.B. LB S. 18/19'}
          className="w-full flex flex-grow h-12 border-2 rounded-lg focus:outline-none focus:shadow-outline p-2 resize-none"
        />
      </Field>
      <Field>
        <Label className="">
          Originaltext (z.B. aus dem Lehrbuch oder einer Geschichte)
        </Label>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="Deine Nachricht"
          placeholder={'Lorem ipsum dolor sit amet...'}
          className="w-full flex flex-grow h-52 border-2 rounded-lg focus:outline-none focus:shadow-outline p-2 resize-none whitespace-pre-line"
          data-testid="ai-text-input"
        />
      </Field>
      <div className="w-full flex">
        <LevelSelector initialLevel={level} onChange={setLevel} />
        <LoadingButton
          text="Arbeitsblatt erstellen"
          isLoading={loading}
          onClick={onConfirm}
          enabled={() => text.length > 0}
        />
      </div>
    </div>
  )
}
