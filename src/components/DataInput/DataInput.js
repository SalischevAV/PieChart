import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/actions/dataArrActions';

function DataInput() {
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
            <form>
                <input type='text' placeholder='title' name='title' onChange={changeInputHandler} value={dataItem.title} />
                <input type='number' min='0' placeholder='amount' name='quantity' onChange={changeInputHandler} value={dataItem.quantity} />
                <button onClick={addClickHandler}>ok</button>
            </form>
        </div>
    )
}

export default DataInput
