import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    // we need to call super on from the parent
    super();
  }

  /** Create getter method to find the length
   *  we need to know this for the for loops
   */
  get length(): number {
    return this.data.length;
  }

  /** Create compare method to see if
   *  elements actually need to be swapped
   */
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  /** Now we can create the method to actually swap */
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
