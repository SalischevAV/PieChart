import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, clearArr } from '../../redux/actions/dataArrActions';

function DataInput(props) {
    const [dataItem, setDataItem] = useState({ title: '', quantity: '' });
    const dispatch = useDispatch();

    const cleareState = () => {
        setDataItem({
            title: '',
            quantity: '',
        });
    }

    const addClickHandler = event => {
        event.preventDefault();
        dispatch(addItem(dataItem));
        cleareState();
    }

    const clearClickHandler = event =>{
        event.preventDefault();
        dispatch(clearArr());
    }

    const changeInputHandler = event => {
        event.persist();
        setDataItem(previousState => ({
            ...previousState, ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    return (
        <div className='data'>
                    <input type='text' placeholder='title' name='title' onChange={changeInputHandler} value={dataItem.title} />
                    <input type='number' min='1' placeholder='amount' name='quantity' onChange={changeInputHandler} value={dataItem.quantity} />
                    <button className='button' onClick={addClickHandler}>add</button>
                    <button className='button' onClick={clearClickHandler}>clear</button>
        </div>
    )
}

export default DataInput
