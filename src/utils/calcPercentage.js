const calcPercentage = (arr)=>{
    const total = arr.reduce((sum,item) => sum + item.quantity, 0);
    // const onePercent = total/100;
    return arr.map(item=> {
       return {...item,
         percentage: item.quantity*100/total,
        color: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
        }
    })

}
export default calcPercentage