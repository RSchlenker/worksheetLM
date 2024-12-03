import { Text, View } from '@react-pdf/renderer'
import { Worksheet } from '../../actions/tools/WorksheetTool'

export default function MultipleChoiceQuestion({
  question,
  index,
}: {
  question: Worksheet['multipleChoiceQuestions'][0]
  index: number
}) {
  return (
    <View style={{ paddingTop: 5, gap: 5 }}>
      <Text>
        {index}. {question.question}
      </Text>
      <View style={{ gap: 5, paddingTop: 5 }}>
        <Option text={question.answer1} />
        <Option text={question.answer2} />
        <Option text={question.answer3} />
      </View>
    </View>
  )
}

function Option({ text }: { text: string }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <SelectionDot />
      <Text>{text}</Text>
    </View>
  )
}

function SelectionDot() {
  return (
    <View
      style={{
        border: '1px',
        borderRadius: '10px',
        width: 13,
        height: 13,
        marginRight: 10,
      }}
    />
  )
}
