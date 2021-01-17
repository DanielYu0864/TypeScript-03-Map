console.log('Hey yo! How\'s going?\n');
//* separate ts file in to src solder, js file into build folder to organize the file structure
//* for TS file:
//* $ tsc --> to compile if the tsconfig.json created and have rootDir && outDir director setup
//* $ tsc -w --> to auto-compile if tsconfig.json exist

//* for Node package.json file:
//* $ npm init -y --> to generate the package.json file
//* install nodemon --> to rerun node everytime the file changed
//* install concurrently --> to run multiple scripts at the same time just using one single command EX:   "start": "concurrently npm:start:*"
//* $ npm start --> to run "start:build" and "start:run" same time

//?############################################################################################################################################################################



//* Bubble Sort

//* bad code
//* Bubble Sort with number of array
// class NumberSorter {
//   // two ways to assign the collection (two of them are same):
//   /** 1.
//   * collection: number[];
//   * constructor(collection: number[]) {
//   *  this.collection = collection;
//   * }
//   **/
//   //2.
//   constructor(public collection: number[] | string) { }
//   //* type guard: instanceof && typeof to check input
//   sort(): void {
//     const { length } = this.collection; //* Destructuring: length = this.collection.length
//     const { collection } = this //*//* Destructuring: collection = this.collection
//     //* Bubble Sort aways runs O(n^2) time to sort the array
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - 1; j++) {
//         // All of this if array if number[]
//         // if collection is an array of number
//         if (collection instanceof Array) { //* instanceof: Narrow down every other type of value - Every other value that is created with a constructor function EX- array object
//           //* collection = number[]
//           // swap the two elements if true
//           if (collection[j] > collection[j + 1]) {
//             const leftHand = collection[j];
//             collection[j] = collection[j + 1];
//             collection[j + 1] = leftHand;
//           }
//         }


//         // only going to work if collection is a string
//         // do this if the collection is string
//         if (typeof collection === 'string') { //* typeof: narrow type of a value to a primitive type EX- number string boolean symbol

//         }
//       }
//     }
//   }
// }

// const numberSorter = new NumberSorter([10, 3, -5, 0]);
// numberSorter.sort();
// console.log(' bad code Number Array Bubble Sort: ');
// console.log(numberSorter.collection);

//* good code: defind interface
//* use interface to share the contract between one class and another class
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
const numbersCollection = new NumbersCollection([1, 50, -25, 6]);
numbersCollection.sort();
console.log('better code: ')
console.log(numbersCollection.data);

import { CharacterCollection } from './CharacterCollection';

const charactersCollection = new CharacterCollection('woDsEwedWenSod');

charactersCollection.sort();
console.log('string sort');
console.log(charactersCollection.data);

//* LinkedList sort
import { LinkedList } from './LinkList';

const linkedList = new LinkedList();

const addRandom = (n: number): void => {
  for (let i = 0; i < n; i++) {
    linkedList.add(Math.floor(Math.random() * 10000));
  }
}
addRandom(10);


linkedList.sort();
console.log('linked list: ',);
linkedList.print();
