import { Text, View } from '@react-pdf/renderer'

export default function TextQuestion({
  question,
  index,
}: {
  question: string
  index: number
}) {
  return (
    <View style={{ flexDirection: 'column' }}>
      <Text style={{ paddingBottom: 20, paddingTop: 15 }}>
        {index}. {question}
      </Text>
      <View
        style={{
          width: '100%',
          border: '1px solid black',
          height: 10,
          marginBottom: 15,
        }}
      ></View>
      <View
        style={{ width: '100%', border: '1px solid black', height: 10 }}
      ></View>
    </View>
  )
}
