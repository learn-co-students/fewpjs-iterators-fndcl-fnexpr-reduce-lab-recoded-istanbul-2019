const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries; 
totalBatteries = batteryBatches.reduce(
(tot,el)=> tot +=el
,0); 