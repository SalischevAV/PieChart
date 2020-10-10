import {ADD_ITEM, REMOVE_ITEM, CLEAR_ARR  } from '../types';
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