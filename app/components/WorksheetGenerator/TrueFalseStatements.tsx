import { Text, View } from '@react-pdf/renderer'
import { Worksheet } from '../../actions/tools/WorksheetTool'

export default function TrueFalseStatements({
  statements,
  index,
}: {
  statements: Worksheet['trueFalseStatements'][0][]
  index: number
}) {
  console.log('Statements:', statements)
  return (
    <View>
      <Text style={{ marginBottom: '10px' }}>
        {index}. Welche Aussage stimmt? Kreuze an!
      </Text>
      <View style={{ border: '1px solid black' }}>
        <TableRow first="Frage" second="Richtig" third="Falsch" />
        {statements.map((statement, index) => {
          return (
            <TableRow
              first={statement.statement}
              isLastOne={index === statements.length - 1}
            />
          )
        })}
      </View>
    </View>
  )
}

function TableRow({
  first = '',
  second = '',
  third = '',
  isLastOne = false,
}: {
  first?: string
  second?: string
  third?: string
  isLastOne?: boolean
}) {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        borderBottom: isLastOne ? '0px' : '1px',
      }}
    >
      <Text
        style={{
          width: '60%',
          borderRight: '1px',
          textAlign: 'center',
          padding: '2px 6px',
        }}
      >
        {first}
      </Text>
      <Text
        style={{
          width: '20%',
          borderRight: '1px',
          textAlign: 'center',
          padding: '2px 6px',
        }}
      >
        {second}
      </Text>
      <Text style={{ width: '20%', textAlign: 'center', padding: '2px 4px' }}>
        {third}
      </Text>
    </View>
  )
}
// return (
//   {
//     statements.map((statement, index) => {
//       return (
//         <View key={index}>
//           <Text>{statement.statement}</Text>
//           <Text>{statement.isTrue ? 'True' : 'False'}</Text>
//         </View>
//       )
//     })
//   })}
// <View style={{ paddingTop: 5 }}>
//   <Text>{question}</Text>
//   <View style={{ gap: 5, paddingTop: 5 }}>
//     <Text>{question.answer1}</Text>
//     <Text>{question.answer2}</Text>
//     <Text>{question.answer3}</Text>
//   </View>
// </View>
