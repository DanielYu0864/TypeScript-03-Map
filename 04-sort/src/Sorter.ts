//* good code: use interface to make a reuseable code
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

// export class Sorter {
// constructor(public collection: Sortable) { }
// sort(): void {
//   const { length } = this.collection; //* Destructuring: length = this.collection.length
//   const { collection } = this //*//* Destructuring: collection = this.collection
//   //* Bubble Sort aways runs O(n^2) time to sort the array
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length - 1; j++) {
//       if (collection.compare(j, j + 1)) {
//         collection.swap(j, j + 1)
//       }
//     }
//   }
// }
// }
//* Abstract Classes
export abstract class Sorter {
  //* set up the abstract that not exist yet but we are going to use
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
  }
}