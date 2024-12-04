'use client'
import { PDFViewer } from '@react-pdf/renderer'
import generateWorksheet from './GenerateWorksheet'
import { Worksheet } from '../../actions/tools/WorksheetTool'
import { RootState, useAppSelector } from '../../../store/store'

export default function WorksheetViewer({
  worksheet,
}: {
  worksheet: Worksheet
}) {
  const worksheets: Worksheet[] = useAppSelector(
    (state: RootState) => state.worksheet.worksheets,
  )
  if (worksheet && worksheet.firstQuestion) {
    const RenderedWorksheet = generateWorksheet(
      // worksheets[worksheets.length - 1],
      worksheet,
    )
    return (
      <PDFViewer style={{ width: '100%', height: 500 }}>
        <RenderedWorksheet />
      </PDFViewer>
    )
  } else {
    return <div>Keine Arbeitsblätter vorhanden</div>
  }
  // console.log('Worksheets in viewer:', worksheets)
}
