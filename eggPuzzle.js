'use strict';
function eggPuzzle(floorNumber, steps = 14, prevThing = 0) {
  console.log(steps);
  if (steps <= 0) {
    return 100;
  }
  if (floorNumber > steps + prevThing) {
    return eggPuzzle(floorNumber, steps - 1, prevThing + steps);
  }else{
    for(let i = prevThing; i < steps + prevThing; i++){
      if(floorNumber === i) {
        return i;
      }
    }
  }
}

console.log(eggPuzzle(101));