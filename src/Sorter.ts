/** Create  an interface which we use to evaluate
 *  whether something can be swapped or not
 */

// Now that we turned Sorter into an abstract class
// we don't need this interface anymore

// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }
/** We will never make an instance of this class */
export abstract class Sorter {
  /** Here we define the type specs for the methods
   *  that we want to define in this parent class
   *  but that will later be created in the child classes
   *  this is saying that these methods don't exist yet,
   *  but will be used by all the child classes
   */
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
