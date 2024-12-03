const { getToolsResponse } = require('../util')

const sampleResponse = {
  id: 'get-tool-calls',
  url: '/gpt-4o/deployments/gpt-4o/chat/completions',
  method: 'POST',
  variants: [
    {
      id: 'default',
      type: 'json',
      options: {
        status: 200,
        body: getToolsResponse([
          {
            arguments: {
              firstQuestion: {
                question:
                  'Beschreibe in einem Satz, warum Anton Piranha freilassen wollte.',
                answer:
                  'Anton wollte Piranha freilassen, damit er zu seiner Familie im See zurückkehren kann.',
              },
              multipleChoiceQuestions: [
                {
                  question: 'Was hatte Anton auf den Steg gestellt?',
                  answer1: 'Ein Buch',
                  answer2: 'Ein Gurkenglas',
                  answer3: 'Einen Eimer',
                  solution: 'Ein Gurkenglas',
                },
                {
                  question: 'Wovor hatte Anton Angst, während er im See war?',
                  answer1: 'Vor einer Feuerqualle',
                  answer2: 'Vor einem Hai',
                  answer3: 'Vor einem Krokodil',
                  solution: 'Vor einer Feuerqualle',
                },
                {
                  question:
                    'Was passierte, als Anton seine Bauchmuskeln nicht mehr halten konnte?',
                  answer1: 'Er fiel ins Wasser',
                  answer2: 'Er zog Piranha zurück in das Glas',
                  answer3: 'Er schrie um Hilfe',
                  solution: 'Er fiel ins Wasser',
                },
              ],
              trueFalseStatements: [
                {
                  statement: 'Anton war morgens allein am See.',
                  isTrue: true,
                },
                {
                  statement: 'Anton wollte Piranha in einem Eimer freilassen.',
                  isTrue: false,
                },
                {
                  statement:
                    'Piranha hat das Gurkenglas nur zögerlich verlassen.',
                  isTrue: false,
                },
              ],
              writeMultiple: {
                question:
                  'Nenne zwei Dinge, die Anton während des Plans benutzt hat.',
                answers: ['Taucherbrille', 'Gurkenglas'],
              },
              nameOfText: 'Anton und der Piranha',
              referenceInBook: 'S. 7-9',
            },
            type: 'worksheetCreator',
          },
        ]),
      },
    },
  ],
}

module.exports = [sampleResponse]
