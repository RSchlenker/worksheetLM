import { Worksheet, worksheetTool } from './tools/WorksheetTool'
import { AzureChatOpenAI } from '@langchain/openai'
import { promptWithExample } from './OpenAITools'
import { HumanMessage } from '@langchain/core/messages'
import { Document, Page, View, Text, PDFViewer } from '@react-pdf/renderer'
import ReactPDF from '@react-pdf/renderer'
import { JSXElement } from '@babel/types'

export async function generatePdf(worksheet?: Worksheet): Promise<JSX.Element> {
  // Create Document Component
  const MyDocument = () => (
    <Document>
      <Page size="A4">
        <View>
          <Text>Section #1</Text>
        </View>
        <View>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  )

  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  )

  // await ReactPDF.render(<MyDocument />, `./pdfGenerator/example.pdf`)
}
