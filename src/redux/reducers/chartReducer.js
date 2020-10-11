import {ADD_ITEM, REMOVE_ITEM, CLEAR_ARR, TRANSFORM_ARR  } from '../types';

const initialState ={
    arr:[],
    arrWithColorsAndPercentage: []
};

const chartReducer = (state=initialState, action)=>{
    switch(action.type){
        case(ADD_ITEM):
            return {...state, arr: state.arr.concat(action.payload)};
        case(CLEAR_ARR) :
            return {...state, arr:[]};
        case(REMOVE_ITEM):
            return {...state, arr:state.arr.filter(item => item.title !== action.payload.title)};
        case (TRANSFORM_ARR):
            return{...state, arrWithColorsAndPercentage:action.payload}
    default: return state;
}
}
export default chartReducer;