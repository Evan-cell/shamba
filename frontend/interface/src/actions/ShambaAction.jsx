import axios from 'axios'

import {SHAMBA_LIST_SUCCESS,SHAMBA_LIST_REQUEST,SHAMBA_LIST_FAILED} from "../constants/ShambaConstants"

export const listShambas = () => async (dispatch) =>{
    try {
        dispatch({type: SHAMBA_LIST_REQUEST})
        
        const { data } = await axios.get('http://127.0.0.1:8000/api/shambas/')

        dispatch({
            type: SHAMBA_LIST_SUCCESS,
            payload: data
        })

    } catch (error){
        dispatch({
            type: SHAMBA_LIST_FAILED,
            payload: error.response && error.response.data.detail? error.response.data.detail : error.message
        })
    }
}