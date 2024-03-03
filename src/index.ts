import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// func to create random array with max length of 100
// each number between 1 and 1000
const makeArray = (): number[] => {
  const randLength = Math.floor(Math.random() * 100) + 1;
  let arr: number[] = [];
  for (let i = 0; i < randLength; i++) {
    const randNum = Math.floor(Math.random() * 1000) + 1;
    arr.push(randNum);
  }
  return arr;
};

const numbersCollection = new NumbersCollection(makeArray());
numbersCollection.sort();
// since the collection is of type numbersCollection we are logging the obj
// that is why we need to access the data property for just the array
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Procrastination");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(4);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);

linkedList.sort();

linkedList.print();
