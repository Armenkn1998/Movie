import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {  fetchingTendingNow, fetchSuccessTendingNow, fetchErrorTendingNow} from "../Slice/TendingNowSlice";
import { IActivMovie } from "../../models/model";
const URL =  process.env.REACT_APP_BASE_URL
export const fetchTendingNow = ()=>{
    return async (dispatch:Dispatch)=>{
        try{
            dispatch(fetchingTendingNow());
            const response =await axios.get(`${URL}TendingNow`);
            dispatch(fetchSuccessTendingNow(response.data));
            
        }
        catch(error){
            dispatch(fetchErrorTendingNow(error as Error));
        }

    }
}

export const activeTendingNow = async (id:string,setActivMovie: (e: IActivMovie) => void)=>{
    
 
        try{
          
            const response =await axios.get(`${URL}TendingNow/${id}`);
            setActivMovie(response.data)
            
        }
        catch(error){
            console.error(error);
            
        }


}