import { Sorter } from "./Sorter";

class Node {
  /** define the next property up here
   *  since we want to be able to create a node without immediately
   *  knowing what the next value is
   *  the type for next will be another node
   */
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }
  /** Recursion method to get length */
  lengthHelper(node: Node | null): number {
    // base case
    if (node == null) {
      return 0;
    }
    // get the count recursively
    return 1 + this.lengthHelper(node.next);
  }
  /**  Wrapper getter function */
  get length(): number {
    return this.lengthHelper(this.head);
  }
  /** Length method without recursion */
  nonRecursionLength(): number {
    let temp = this.head;
    let count = 0;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  /** Find a node at a specific index */
  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds");
  }
  /** Compare method */
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty.");
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }
  /** Swapping in linked list can be very hard
   *  so instead of actually swapping the nodes
   *  we are going to just swap the values
   */
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }
  /** Function to print the data */
  print(): void {
    if (!this.head) {
      throw new Error("List is empty.");
    }

    let node: Node | null = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
