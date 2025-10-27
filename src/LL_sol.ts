class Node<T> {
  public readonly data: T;
  public prev: Node<T> | null = null;
  public next: Node<T> | null = null;
  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private _size: number = 0;

  public size(): number {
    return this._size;
  }

  public append(data: T): void {
    const newNode = new Node<T>(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail !== null) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
    this._size++;
  }

  public delete(data: T): boolean {
    if (this.head === null) {
      return false;
    }
    let current: Node<T> | null = this.head;
    while (current !== null) {
      if (current.data === data) {
        this.removeNode(current);
        return true;
      }
      current = current.next;
    }
    return false;
  }

  private removeNode(nodeToRemove: Node<T>): void {
    if (nodeToRemove === this.head && nodeToRemove === this.tail) {
      this.head = null;
      this.tail = null;
    } else if (nodeToRemove === this.head) {
      this.head = nodeToRemove.next;
      if (this.head !== null) {
        this.head.prev = null;
      }
    } else if (nodeToRemove === this.tail) {
      this.tail = nodeToRemove.prev;
      if (this.tail !== null) {
        this.tail.next = null;
      }
    } else {
      if (nodeToRemove.prev !== null) {
        nodeToRemove.prev.next = nodeToRemove.next;
      }
      if (nodeToRemove.next !== null) {
        nodeToRemove.next.prev = nodeToRemove.prev;
      }
    }
    this._size--;
  }

  public search(data: T): T | null {
    let current: Node<T> | null = this.head;
    while (current !== null) {
      if (current.data === data) {
        return current.data;
      }
      current = current.next;
    }
    return null;
  }

  public printList(): readonly T[] {
    const result: T[] = [];
    let current: Node<T> | null = this.head;

    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  public printListReverse(): readonly T[] {
    const result: T[] = [];
    let current: Node<T> | null = this.tail;
    while (current !== null) {
      result.push(current.data);
      current = current.prev;
    }
    return result;
  }

  public getFirst(): T | null {
    return this.head?.data ?? null;
  }

  public getLast(): T | null {
    return this.tail?.data ?? null;
  }

  public isEmpty(): boolean {
    return this._size === 0;
  }

  public clear(): void {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }
}
