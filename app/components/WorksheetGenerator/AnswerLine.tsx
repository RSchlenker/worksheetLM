import { View } from '@react-pdf/renderer'

export default function AnswerLine({ level }: { level: number }) {
  console.log(`level: ${level}`)
  if (level === 3) {
    return (
      <View
        style={{
          width: '100%',
          border: '1px solid black',
          height: 10,
          marginTop: 10,
          marginBottom: 6,
        }}
      ></View>
    )
  } else if (level === 4) {
    return (
      <View
        style={{
          width: '100%',
          borderBottom: '1px solid black',
          height: 10,
          marginVertical: 9,
        }}
      />
    )
  } else {
    return (
      <View style={{ marginVertical: 5 }}>
        <View
          style={{
            width: '100%',
            height: 10,
            borderTop: '1px solid black',
            borderBottom: '1px solid black',
            borderRight: '1px solid black',
            borderLeft: '1px solid black',
          }}
        />
        <View
          style={{
            width: '100%',
            height: 10,
            borderBottom: '1px solid black',
            borderRight: '1px solid black',
            borderLeft: '1px solid black',
          }}
        />{' '}
        <View
          style={{
            width: '100%',
            height: 10,
            borderBottom: '1px solid black',
            borderRight: '1px solid black',
            borderLeft: '1px solid black',
          }}
        />
      </View>
    )
  }
}
