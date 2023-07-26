import {SHAMBA_LIST_SUCCESS,SHAMBA_LIST_REQUEST,SHAMBA_LIST_FAILED} from "../constants/ShambaConstants"

export const shambaListReducer = (state = {shambas: []},action) =>{
    switch (action.type) {
        case SHAMBA_LIST_REQUEST:
            return {loading: true, shambas:[] }

        case SHAMBA_LIST_SUCCESS:
            return {loading: false, shambas: action.payload}

        case SHAMBA_LIST_FAILED:
            return {loading: false, error: action.payload}    

            
        default:
            return state;
    }
}