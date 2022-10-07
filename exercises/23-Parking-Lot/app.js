

let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(parking) {
  const state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
}
  for (let i = 0; i < parking.length; i++) {
    for (let j = 0; j< parking[i].length; j++) {
      if (parking[i][j]==2) {
        state.availableSlots++;
        state.totalSlots++; 
      } else if(parking[i][j]==1) {
        state.occupiedSlots++;
        state.totalSlots++;
      } 
    }
}   
  return state;
}
console.log(getParkingLotState(parking_state))
