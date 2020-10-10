import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { addItem } from '../../redux/actions/dataArrActions';

function DataInput({array}) {
    const [dataItem, setDataItem] = useState({title:'', quantity:0});
    const dispatch = useDispatch();

    const addClickHandler = (event) =>{
        event.preventDefault();
        dispatch(addItem(dataItem));
    }
    return (
        <div className='data'>
            <form>
                <input type='text' placeholder='title' />
                <input type='number' min='1' placeholder='amount' />
                <button onClick={addClickHandler}>ok</button>
            </form>
        </div>
    )
}

export default DataInput
