import { screen } from '@testing-library/react'
import { renderWithProviders } from '../utils'
import { expect, it } from '@jest/globals'
import SimpleWorksheetValidator from '../../app/components/SimpleWorksheetValidator'
import { Worksheet } from '../../app/actions/tools/WorksheetTool'

const testWorksheet: Worksheet = {
  firstQuestion: {
    question: 'Question1',
    answer: 'Answer1',
  },
  multipleChoiceQuestions: [
    {
      question: 'Question2',
      answer1: 'Answer1',
      answer2: 'Answer2',
      answer3: 'Answer3',
      solution: 'Answer1',
    },
    {
      question: 'Question3',
      answer1: 'Answer1',
      answer2: 'Answer2',
      answer3: 'Answer3',
      solution: 'Answer2',
    },
  ],
  trueFalseStatements: [
    {
      statement: 'Statement1',
      isTrue: true,
    },
    {
      statement: 'Statement2',
      isTrue: false,
    },
    {
      statement: 'Statement3',
      isTrue: true,
    },
  ],
  writeMultiple: {
    question: 'Question4',
    answers: ['Answer1', 'Answer2', 'Answer3'],
  },
  nameOfText: 'Title one',
  referenceInBook: 'Book1',
} as Worksheet

const submitMock = jest.fn()

it('should display heading', () => {
  renderWithProviders(
    <SimpleWorksheetValidator
      worksheet={testWorksheet}
      onSubmit={submitMock}
    />,
  )
  expect(screen.findByText('Generierte something')).toBeDefined()
  //TODO: Test form component as soon as possible
})

// it('should update data in graph when adding a new factor', async () => {
//   renderWithProviders(<Page />)
//   expect(screen.getByTestId('chart')).toHaveAttribute(
//     'data-chart-result',
//     '99994',
//   )
//   const AITextInput = screen.getByTestId('ai-text-input')
//   await act(async () => {
//     fireEvent.change(AITextInput, {
//       target: { value: 'Robin verdient 2000 Euro monatlich.' },
//     })
//     fireEvent.click(screen.getByText('Vorstellung hinzufügen'))
//   })
//   expect(screen.getByTestId('chart')).toHaveAttribute(
//     'data-chart-result',
//     '76507',
//   )
// })
//
// it('should add a new outcome to the list of factors', async () => {
//   const { store } = renderWithProviders(<Page />)
//   const AITextInput = screen.getByTestId('ai-text-input')
//   const noOfUsedFactors = screen.getAllByTestId('factor-view').length
//   await act(async () => {
//     fireEvent.change(AITextInput, {
//       target: { value: 'Robin verdient 2000 Euro monatlich.' },
//     })
//     fireEvent.click(screen.getByText('Vorstellung hinzufügen'))
//   })
//   expect(screen.getAllByTestId('factor-view')).toHaveLength(noOfUsedFactors + 1)
// })
