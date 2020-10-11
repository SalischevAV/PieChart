import {ADD_ITEM, REMOVE_ITEM, CLEAR_ARR, TRANSFORM_ARR  } from '../types';
import calcPercentage from '../../utils/calcPercentage';

export function addItem(item){
    return {
        type: ADD_ITEM,
        payload: ([item])
    }
}

export function clearArr(){
    return{
        type: CLEAR_ARR
    }
}

export function removeItem(item){
    return{
        type:REMOVE_ITEM,
        payload: item, 
    }
}

export function transformArr(arr){
    return{
        type: TRANSFORM_ARR,
        payload: calcPercentage(arr),
    }
}