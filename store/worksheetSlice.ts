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
  },
})

export const { addWorksheet } = worksheetSlice.actions
export const worksheetReducer = worksheetSlice.reducer
