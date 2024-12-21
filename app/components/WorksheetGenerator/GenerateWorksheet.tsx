import { Document, Font, Image, Page, Text, View } from '@react-pdf/renderer'
import { Worksheet } from '../../actions/tools/WorksheetTool'
import TextQuestion from './TextQuestion'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import TrueFalseStatements from './TrueFalseStatements'

export default function generateWorksheet(worksheet: Worksheet) {
  Font.register({
    family: 'Grundschrift',
    src: 'grundschrift/Grundschrift-Regular.ttf',
  })
  return () => (
    <Document
      style={{ fontSize: 14, fontFamily: 'Grundschrift' }}
      title={'DOKU 1'}
    >
      <Page size="A4">
        <View>
          <Image
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '845px',
              border: 'none',
            }}
            src="/ab_hintergrund.png"
            source={'./ab_hintergrund.png'}
          />
          <View
            style={{
              padding: '120px 75px 65px 75px',
            }}
          >
            <View
              style={{
                flexDirection: 'column',
                gap: '10px',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <Text style={{ fontSize: 16, marginLeft: -8 }}>
                Quiz für den Text "{worksheet.nameOfText}"(
                {worksheet.referenceInBook})
              </Text>
              <TextQuestion
                question={worksheet.firstQuestion.question}
                index={1}
                level={worksheet.level}
              />
              <MultipleChoiceQuestion
                question={worksheet.multipleChoiceQuestions[0]}
                index={2}
              />
              <TrueFalseStatements
                statements={worksheet.trueFalseStatements}
                index={3}
              />
              <TextQuestion
                question={worksheet.writeMultiple.question}
                index={4}
                level={worksheet.level}
              />
              <MultipleChoiceQuestion
                question={worksheet.multipleChoiceQuestions[1]}
                index={5}
              />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}
