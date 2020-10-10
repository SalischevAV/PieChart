import React from 'react';
import { rotationPercentage, sumRotationPercentage, rotationCoefficient } from '../../utils/calcConsts'


function Chart({arr}) {

    return (
            <svg viewBox="-16 -16 32 32">
                    {
                        arr.map((item, index, arr) => {
                            const offset = (sumRotationPercentage(arr, 'percentage', index));
                            return <g key={index}>
                                <circle
                                    style={{
                                        stroke: item.color,
                                        strokeDasharray: `${rotationPercentage * item.percentage} ${rotationPercentage * 100}`,
                                        strokeDashoffset: `${index !== 0 ?-rotationPercentage * offset : 0}`
                                    }}
                                >
                                </circle>
                                <text
                                    style={{ transform: `rotate(${(offset + item.percentage/2)*rotationCoefficient}deg)` }}
                                >
                                    {item.title}
                                </text>
                            </g>
                        })
                    }
            </svg>
    )
}

export default Chart


{/* <circle class='c1' />
                    <circle class='c2' />
                    <circle class='c3' />
                    <circle class='c4' />
                    <text class='t1'>300000%</text>
                    <text class='t2'>400000%</text> */}