import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IActivMovie } from '../../models/model'

interface ActivMovieState {
   loading: boolean;
   error:string;
   Movie:IActivMovie[]
}

const initialState: ActivMovieState = {
    loading: false,
    error:"",
    Movie:[],
}

export const MovieSlice = createSlice({
  name: 'Movie',
  initialState,
  reducers: {
    fetchingMovie(state){
        state.loading = true;
    },
    fetchSuccessMovie(state,action: PayloadAction<IActivMovie[]>){
        state.loading = false;
        state.Movie = action.payload;
        state.error = ''
    },
    fetchErrorMovie(state,action: PayloadAction<Error>){
        state.loading = false;
        state.error = action.payload.message
    }
  }
})

export const {  fetchingMovie, fetchSuccessMovie, fetchErrorMovie } = MovieSlice.actions


export default MovieSlice.reducer