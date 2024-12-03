import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Worksheet } from '../app/actions/tools/WorksheetTool'

export interface IChartSlice {
  worksheets: Array<Worksheet>
}

const initialState: IChartSlice = {
  worksheets: [],
}

export const worksheetSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    addWorksheet: (state, action?: PayloadAction<Worksheet>) => {
      if (action) {
        state.worksheets.push(action.payload)
      }
    },
  },
})

export const { addWorksheet } = worksheetSlice.actions
export const worksheetReducer = worksheetSlice.reducer
