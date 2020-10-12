import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/actions/dataArrActions';

function DataInput(props) {
    const dispatch = useDispatch();
    const [dataItem, setDataItem] = useState({ title: '', quantity: '' });

    const [titleDirty, setTitleDirty] = useState(false);
    const [quantityDirty, setQuantityDirty] = useState(false);

    const [titleError, setTitleError] = useState('title must be longer than 1 character');
    const [quantityError, setQuantityError] = useState('quantity must be bigger than 0');

    const blurHandler = event => {
        switch (event.target.name) {
            case 'title': {
                setTitleDirty(true);
                break;
            }
            case 'quantity': {
                setQuantityDirty(true);
                break;
            }
            default: break;
        }
    }

    const cleareState = () => {
        setDataItem({
            title: '',
            quantity: '',
        });
        setTitleError('title must be longer than 1 character');
        setQuantityError('quantity must be bigger than 0');
        setTitleDirty(false);
        setQuantityDirty(false);
    }

    const addClickHandler = event => {
        event.preventDefault();
        dispatch(addItem(dataItem));
        cleareState();
    }


    const changeTitleHandler = event => {
        event.persist();
        setDataItem(previousState => ({ ...previousState, ...{ title: event.target.value } }));
        if (event.target.value == !!false) {
            setTitleError('title must be longer than 1 character');
        } else {
            setTitleError('');
        }
    }

    const changeQuantityHandler = event => {
        event.persist();
        setDataItem(previousState => ({ ...previousState, ...{ quantity: event.target.value } }));
        if (event.target.value < 1) {
            setQuantityError('quantity must be bigger than 0');
        } else {
            setQuantityError('');
        }
    }

    return (
        <div className='data'>
            <div className='data__wraper'>
                <label htmlFor="title">Item title</label>
                <input
                    type='text'
                    placeholder='title'
                    name='title'
                    onChange={changeTitleHandler}
                    onBlur={blurHandler}
                    value={dataItem.title}
                />
                {(titleDirty && titleError) && <div style={{ color: 'red' }}>{titleError}</div>}
            </div>

            <div className='data__wraper'>
                <label htmlFor="quantity">Item quantity</label>
                <input
                    type='number'
                    min='1'
                    placeholder='amount'
                    name='quantity'
                    onChange={changeQuantityHandler}
                    onBlur={blurHandler}
                    value={dataItem.quantity}
                />
                {(quantityDirty && quantityError) && <div style={{ color: 'red' }}>{quantityError}</div>}
            </div>
            <button
                className='button'
                onClick={addClickHandler}
                disabled={(titleError || quantityError) ? true : false}
            >
                add
            </button>



        </div>
    )
}

export default DataInput
