import { Sorter } from './Sorter';

export class NumbersCollection extends /* share the function from other class */ Sorter {
  constructor(public data: number[]) {
    super();
  };

  get length(): number {//* get: don't need to called length as function EX: newArr.length
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const { data } = this;
    return data[leftIndex] > data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const { data } = this;
    const leftHand = data[leftIndex];
    data[leftIndex] = data[rightIndex];
    data[rightIndex] = leftHand;
  }
}
