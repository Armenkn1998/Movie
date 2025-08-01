import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {  fetchingMovie, fetchSuccessMovie, fetchErrorMovie } from "../Slice/HomeSlice";
import { IActivMovie } from "../../models/model";
const URL =  process.env.REACT_APP_BASE_URL
export const fetchMovie = ()=>{
    return async (dispatch:Dispatch)=>{
        try{
            dispatch(fetchingMovie());
            const response =await axios.get(`${URL}Featured`);
            dispatch(fetchSuccessMovie(response.data));
            
        }
        catch(error){
            dispatch(fetchErrorMovie(error as Error));
        }

    }
}
export const putfetchMovie = async (obj:IActivMovie)=>{
  
        try{
            const response =await axios.put(`${URL}Featured`,obj);
            
        }
        catch(error){
        }

    
}