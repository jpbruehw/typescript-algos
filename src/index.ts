import { Sorter } from "./Sorter";

// func to create random array with max length of 100
// each number between 1 and 1000
const makeArray: () => number[] = () => {
  const randLength = Math.floor(Math.random() * 100) + 1;
  let arr: number[] = [];
  for (let i = 0; i < randLength; i++) {
    const randNum = Math.floor(Math.random() * 1000) + 1;
    arr.push(randNum);
  }
  return arr;
};

const sorter = new Sorter(makeArray());
sorter.sort();
console.log(sorter.collection);
