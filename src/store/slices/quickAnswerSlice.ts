import { createSlice } from '@reduxjs/toolkit'
import { quickAnswerAsync } from '../requests/quickAnswerAsync'

import { AnswerType } from '../../types/Answer'
import { StatusEnum } from '../../types/Status'

type AnswerState = {
   answer: AnswerType | null,
   status: StatusEnum,
   error: string
}

const initialState: AnswerState = {
   answer: null,
   status: StatusEnum.IDKE,
   error: '',
}

const quickAnswerSlice = createSlice({
   name: 'quickAnswer',
   initialState,
   reducers: {
      
      // #when popop will be closed we reset the state
      resetAnswer: (state) => {
         state.answer = null
         state.status = StatusEnum.IDKE
      }
   },

   extraReducers: (builder): void => {
      builder
         .addCase(quickAnswerAsync.pending, (state): void => {
            state.status = StatusEnum.PENDING
         })
         .addCase(quickAnswerAsync.fulfilled, (state, action): void => {
            state.status = StatusEnum.FULFILLED
            state.answer = action.payload
         })
         .addCase(quickAnswerAsync.rejected, (state, action): void => {
            state.status = StatusEnum.REJECTED
            state.error = action.payload as string
         })
   }
})

const { actions, reducer } = quickAnswerSlice

export const { resetAnswer } = actions
export default reducer


