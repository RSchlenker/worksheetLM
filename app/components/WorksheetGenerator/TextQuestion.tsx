import { Text, View } from '@react-pdf/renderer'
import AnswerLine from './AnswerLine'

export default function TextQuestion({
  question,
  index,
  level,
}: {
  question: string
  index: number
  level: number
}) {
  return (
    <View style={{ flexDirection: 'column' }}>
      <Text style={{ paddingBottom: 10, paddingTop: 15 }}>
        {index}. {question}
      </Text>
      <AnswerLine level={level} />
      <AnswerLine level={level} />
    </View>
  )
}
