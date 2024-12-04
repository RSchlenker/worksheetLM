import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Worksheet } from '../app/actions/tools/WorksheetTool'
import { v4 } from 'uuid'

export interface IChartSlice {
  worksheets: Array<Worksheet>
  currentWorksheet: Worksheet
}

const initialState: IChartSlice = {
  worksheets: [],
  currentWorksheet: {} as Worksheet,
}

export const worksheetSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    addWorksheet: (state, action?: PayloadAction<Worksheet>) => {
      if (action) {
        const worksheet = {
          ...action.payload,
          id: v4(),
        }
        state.worksheets.push(worksheet)
        state.currentWorksheet = worksheet
      }
    },
    updateWorksheet: (state, action: PayloadAction<Worksheet>) => {
      console.log('worksheets in slice:', action.payload)
      console.log(state.currentWorksheet)
      const index = state.worksheets.findIndex(
        (worksheet) => worksheet.id === action.payload,
      )
      console.log(index)
      if (index !== -1) {
        state.worksheets[index] = action.payload
      }
    },
  },
})

export const { addWorksheet, updateWorksheet } = worksheetSlice.actions
export const worksheetReducer = worksheetSlice.reducer
