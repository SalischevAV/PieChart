import {ADD_ITEM, REMOVE_ITEM  } from '../types';
import calcPercentage from '../../utils/calcPercentage';

export function addItem(item, arr){
    return {
        type: ADD_ITEM,
        payload: calcPercentage(arr.concat([item]))
    }
}