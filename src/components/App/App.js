import React, {useRef} from 'react';
import Chart from '../Chart/Chart';
import '../../assets/SCSS/style.css';

const arr = [
  { title: 'apple', percentage: 25, color: '#519236' },
  { title: 'grape', percentage: 20, color: '#b23514' },
  { title: 'waterlemon', percentage: 5, color: '#b5f422' },
  { title: 'cherry', percentage: 18, color: '#b122f4' },
  { title: 'lemon', percentage: 10, color: '#29aafa' },
  { title: 'pinapple', percentage: 22, color: '#9c727b' },
  ]



function App() {
  const bodyRef = useRef();
  const color = ()=>{
    bodyRef.current.style.background = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    console.log('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
  }
  return (
    <div className="container" ref={bodyRef}> 
        <button onClick={color}>QWE</button>
        <Chart arr={arr} />
    </div>
  );
}

export default App;
