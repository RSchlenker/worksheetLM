export default function QuestionEntry({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  return (
    <div className="flex flex-row gap-14 w-full px-5 py-1">
      <div className="font-bold">{question}</div>
      <div>{answer}</div>
    </div>
  )
}
