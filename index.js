const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const reducer = (batteryBatches) => batteryBatches.reduce((total, battery) => total + battery);
const totalBatteries = reducer(batteryBatches);