import SimpleWorksheetValidator from './SimpleWorksheetValidator'
import { Worksheet } from '../actions/tools/WorksheetTool'
import { RootState, useAppSelector } from '../../store/store'
import { useState } from 'react'
import WorksheetViewer from './WorksheetGenerator/WorksheetViewer'

export default function WorksheetWrapper() {
  const worksheets: Worksheet[] = useAppSelector(
    (state: RootState) => state.worksheet.worksheets,
  )
  const [currentWorksheet, setCurrentWorksheet] = useState({} as Worksheet)

  const onWorksheetChange = (worksheet: Worksheet) => {
    console.log(worksheet.firstQuestion.question)
    setCurrentWorksheet(worksheet)
  }

  if (worksheets && worksheets.length > 0) {
    console.log(worksheets[worksheets.length - 1])
    return (
      <div>
        <SimpleWorksheetValidator
          onSubmit={onWorksheetChange}
          worksheet={worksheets[worksheets.length - 1]}
        />
        <WorksheetViewer worksheet={currentWorksheet} />
      </div>
    )
  } else {
    return <div>Keine Arbeitsblätter vorhanden</div>
  }
}
