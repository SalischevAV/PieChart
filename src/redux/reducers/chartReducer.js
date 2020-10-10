import {ADD_ITEM, REMOVE_ITEM  } from '../types';

const initialState ={
    arr:[]
};

const chartReducer = (state=initialState, action)=>{
    switch(action.type){
        case(ADD_ITEM):
            return {...state, arr: action.payload};
        case(REMOVE_ITEM):
    default: return state;
}
}
export default chartReducer;