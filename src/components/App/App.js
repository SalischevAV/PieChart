import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Chart from '../Chart/Chart';
import DataInput from '../DataInput/DataInput';
import Legend from '../Legend/Legend';
import { transformArr } from '../../redux/actions/dataArrActions';
import '../../assets/SCSS/style.css';


function App() {
  const dispatch = useDispatch();
  const arr = useSelector(state => state.chart.arr);
  const arrWithColorsAndPercentage = useSelector(state=> state.chart.arrWithColorsAndPercentage)
  useEffect(()=>{
    dispatch(transformArr(arr))
  },[arr])


  
  return (
    <>
      <div className="container">  
        <DataInput />
      </div>
      <div className='container'>
        <Chart arr={arrWithColorsAndPercentage} />
        <Legend arr={arrWithColorsAndPercentage} /> 
      </div>
    </>
  );
}

export default App;
