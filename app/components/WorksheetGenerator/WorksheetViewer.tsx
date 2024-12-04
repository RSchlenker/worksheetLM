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
  if (worksheet && worksheet.firstQuestion) {
    const RenderedWorksheet = generateWorksheet(worksheet)
    return (
      <PDFViewer style={{ width: '100%', height: '85%' }}>
        <RenderedWorksheet />
      </PDFViewer>
    )
  } else {
    return <div>Worksheet nicht generiert</div>
  }
}
