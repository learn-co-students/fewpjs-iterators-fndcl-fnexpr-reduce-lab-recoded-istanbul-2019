const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//const totalBatteries = (accumulator, currentValue) => accumulator + currentValue
//console.log(batteryBatches.reduce(totalBatteries))

let totalBatteries = batteryBatches.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
})