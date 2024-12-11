'use server'

import { promptWithExample } from './OpenAITools'
import { HumanMessage } from '@langchain/core/messages'
import { Worksheet, worksheetTool } from './tools/WorksheetTool'
import { ChatFireworks } from '@langchain/community/chat_models/fireworks'

export async function askChatGPT(
  question: string,
  nameOfText: string,
  referenceOfText: string,
): Promise<Worksheet> {
  const model = new ChatFireworks()
  const modelWithTools = model.bindTools([worksheetTool])
  const response = await modelWithTools.invoke(
    [...promptWithExample, new HumanMessage(question)],
    {
      tool_choice: 'required',
    },
  )
  console.log(JSON.stringify(response, null, 2))
  if (!response.tool_calls || response.tool_calls.length === 0) {
    return {} as Worksheet
  }
  const generatedWorksheet = response.tool_calls[0].args as Worksheet
  generatedWorksheet.nameOfText = nameOfText
  generatedWorksheet.referenceInBook = referenceOfText
  return generatedWorksheet
}
