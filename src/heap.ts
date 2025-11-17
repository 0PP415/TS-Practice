type compareFn<T> = (a: T, b: T) => number;

export class Heap<T> {
  private compare: compareFn<T>;
  private storage: T[] = [];

  constructor(compare: compareFn<T>) {
    this.compare = compare;
  }

  public size(): number {
    return this.storage.length;
  }

  public isEmpty(): boolean {
    return this.storage.length === 0;
  }

  public push(item: T): void {
    this.storage.push(item);
    this.bubbleUp();
  }

  public pop(): T {
    if (this.isEmpty()) {
      throw new Error("heap is empty");
    }

    const root = this.storage[0];
    if (root === undefined) throw new Error("Heap root is undefined");

    if (this.storage.length === 1) {
      this.storage.pop();
      return root;
    }

    const lastItem = this.storage.pop();
    if (lastItem !== undefined) {
      this.storage[0] = lastItem;
      this.bubbleDown();
    }
    return root;
  }

  public peek(): T {
    if (this.isEmpty()) {
      throw new Error("heap is empty");
    }

    const root = this.storage[0];
    if (root === undefined) throw new Error("Heap root is undefined");

    return root;
  }

  private bubbleUp(): void {
    let currIdx = this.storage.length - 1;
    while (currIdx > 0) {
      let parentIdx = this.parent(currIdx);

      const currItem = this.storage[currIdx];
      const parentItem = this.storage[parentIdx];

      if (currItem !== undefined && parentItem !== undefined) {
        if (this.compare(parentItem, currItem) > 0) {
          [this.storage[currIdx], this.storage[parentIdx]] = [
            parentItem,
            currItem,
          ];
          currIdx = parentIdx;
        } else {
          break;
        }
      }
    }
  }

  private bubbleDown(): void {
    let currIdx = 0;
    let lastIdx = this.storage.length - 1;

    while (this.left(currIdx) <= lastIdx) {
      let leftIdx = this.left(currIdx);
      let rightIdx = this.right(currIdx);

      const currItem = this.storage[currIdx];
      const leftItem = this.storage[leftIdx];
      const rightItem = this.storage[rightIdx];

      if (currItem === undefined || leftItem === undefined) break;

      let orderIdx = leftIdx;
      let orderItem = leftItem;

      if (
        rightIdx <= lastIdx &&
        rightItem !== undefined &&
        this.compare(leftItem, rightItem) > 0
      ) {
        orderIdx = rightIdx;
        orderItem = rightItem;
      }

      if (this.compare(currItem, orderItem) > 0) {
        [this.storage[currIdx], this.storage[orderIdx]] = [orderItem, currItem];
        currIdx = orderIdx;
      } else {
        break;
      }
    }
  }

  private parent(curr: number): number {
    return (curr - 1) >> 1;
  }
  private left(curr: number): number {
    return curr * 2 + 1;
  }
  private right(curr: number): number {
    return curr * 2 + 2;
  }
}
