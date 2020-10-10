const calcPercentage = (arr) => {
    const total = arr.reduce((sum, item) => sum + Number(item.quantity), 0);
    return arr.map(item => {
        return {
            ...item,
            percentage: Number(item.quantity) * 100 / total,
            color: '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)
        }
    })

}
export default calcPercentage