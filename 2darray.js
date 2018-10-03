'use strict';

const array = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];

function twoD(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = [...arr[i]];
  }
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (array[i][j] === 0) {
        for (let k = 0; k < arr.length; k++) {
          newArray[k][j] = 0;
        }
        newArray[i] = newArray[i].map(() => 0);
      }
    }
  }
  return newArray;
}

console.log(twoD(array));
