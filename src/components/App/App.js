import React from 'react';
import Chart from '../Chart/Chart';
import DataInput from '../DataInput/DataInput';

import calcPercentage from '../../utils/calcPercentage';

import '../../assets/SCSS/style.css';

  const arr = [
    { title: 'apple', quantity: 256,  },
    { title: 'grape', quantity: 120,  },
    { title: 'waterlemon', quantity: 5,},
    { title: 'cherry', quantity: 178,  },
    { title: 'lemon', quantity: 1089,  },   
    { title: 'bullets', quantity: 852,  },
    ]



function App() {
  return (
    <div className="container"> 
        <DataInput arr={arr} />
        <Chart arr={calcPercentage(arr)} />
    </div>
  );
}

export default App;
