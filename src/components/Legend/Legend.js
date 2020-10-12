import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem,  clearArr } from '../../redux/actions/dataArrActions';


function Legend({ arr }) {

    const dispatch = useDispatch();

    const removeItemHandler = (item) => {
        dispatch(removeItem(item));

    }

    const clearClickHandler = event => {
        event.preventDefault();
        dispatch(clearArr());
    }

    if(arr.length) {
    return (
        
        <div className='legend'>
            <ul>
                {arr.map((item, index) =>
                    <li
                        key={index}
                        onClick={() => removeItemHandler(item)}
                    >
                        <div className='legend__item'>
                            <div
                                className='legend__color'
                                style={{
                                    'background': `${item.color}`,
                                    'position': 'absolute',
                                    'left': '0',
                                    'top': '0',
                                    'borderRadius': '50%',
                                    'width': '20px',
                                    'height': '20px',
                                }}
                            >
                             </div>
                            <div className='legend__item--text'>
                                {item.title} : {item.quantity}
                            </div>
                        </div>
                    </li>
                )}
            </ul>
            <button className='button legend__button' onClick={clearClickHandler}>clear chart</button>
        </div>
                            
    )}
    return(
        <div></div>
    )
}

export default Legend
