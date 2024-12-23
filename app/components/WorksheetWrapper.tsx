import SimpleWorksheetValidator from './SimpleWorksheetValidator'
import { Worksheet } from '../actions/tools/WorksheetTool'
import { RootState, useAppSelector } from '../../store/store'
import { useEffect, useState } from 'react'
import WorksheetViewer from './WorksheetGenerator/WorksheetViewer'
import { Button } from '@headlessui/react'
import { AiOutlineEdit, AiOutlineEye } from 'react-icons/ai'
import { BsClipboardData } from 'react-icons/bs'
import { FaClipboardQuestion } from 'react-icons/fa6'

export default function WorksheetWrapper() {
  const worksheets: Worksheet[] = useAppSelector(
    (state: RootState) => state.worksheet.worksheets,
  )
  const initialWorksheet =
    worksheets.length > 0 ? worksheets[0] : ({} as Worksheet)
  const [currentWorksheet, setCurrentWorksheet] = useState(initialWorksheet)
  const [isEditing, setIsEditing] = useState(false)

  const onWorksheetChange = (worksheet: Worksheet) => {
    setCurrentWorksheet(worksheet)
    setIsEditing(false)
  }

  const toggleEdit = () => {
    if (isEditing) {
      setIsEditing(false)
    } else {
      setIsEditing(true)
    }
  }

  useEffect(() => {
    if (worksheets.length > 0) {
      setCurrentWorksheet(worksheets[worksheets.length - 1])
    }
  }, [worksheets])

  const EditOrViewWorksheet = () => {
    if (isEditing) {
      return (
        <div className="h-full">
          <SimpleWorksheetValidator
            onSubmit={onWorksheetChange}
            worksheet={currentWorksheet}
          />
        </div>
      )
    } else {
      return <WorksheetViewer worksheet={currentWorksheet} />
    }
  }

  return (
    <div className="bg-gray-100 p-8 shadow-xl h-[85vh] flex flex-col">
      <div className="flex py-5 align-middle h-20">
        <h2 className="text-4xl font-bold my-auto mr-auto">Arbeitsblatt</h2>
        {!isEditing && worksheets && worksheets.length ? (
          <Button
            className="h-14 rounded-3xl  bg-cyan-700 hover:bg-cyan-400 text-white -mt-3"
            onClick={toggleEdit}
          >
            <AiOutlineEdit className="text-4xl" />
          </Button>
        ) : (
          ''
        )}
      </div>
      <div className="h-[80%]">
        {worksheets && worksheets.length ? (
          <EditOrViewWorksheet />
        ) : (
          <NoWorksheetYet />
        )}
      </div>
    </div>
  )
}

const NoWorksheetYet = () => {
  return (
    <div className="w-full">
      <div className="mx-auto text-center text-2xl flex flex-col gap-5">
        <FaClipboardQuestion className="text-[15rem] mx-auto my-10" />
        <p>Du hast noch kein Arbeitsblatt erstellt.</p>
        <p>Generiere heute dein erstes!</p>
      </div>
    </div>
  )
}
