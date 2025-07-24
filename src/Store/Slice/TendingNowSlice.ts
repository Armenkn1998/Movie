import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IActivMovie } from '../../models/model'

interface TendingNoweState {
   loading: boolean;
   error:string;
   TendingNows:IActivMovie[]
}

const initialState:TendingNoweState = {
    loading: false,
    error:"",
    TendingNows:[],
}

export const TendingNowSlice = createSlice({
  name: 'TendingNows',
  initialState,
  reducers: {
    fetchingTendingNow(state){
        state.loading = true;
    },
    fetchSuccessTendingNow(state,action: PayloadAction<IActivMovie[]>){
        state.loading = false;
        state.TendingNows = action.payload;
        state.error = ''
    },
    fetchErrorTendingNow(state,action: PayloadAction<Error>){
        state.loading = false;
        state.error = action.payload.message
    }
  }
})

export const {  fetchingTendingNow, fetchSuccessTendingNow, fetchErrorTendingNow } = TendingNowSlice.actions


export default TendingNowSlice.reducer