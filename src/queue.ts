// HW - queue

// 이전에 작성했던 이중 링크드 리스트를 이용하여 deque를 구현하고
// stack 과 queue의 기능을 모두 만족하도록 구현하자.
class Node<T> {
  item: T | null;
  next: Node<T> | null = null;
  prev: Node<T> | null = null;

  constructor(item: T | null = null) {
    this.item = item;
  }
}

export class LinkedList<T> {
  private head: Node<T>;
  private tail: Node<T>;
  private _size: number;

  constructor() {
    this.head = new Node<T>();
    this.tail = new Node<T>();

    this.head.next = this.tail;
    this.tail.prev = this.head;
    this._size = 0;
  }

  public isEmpty(): boolean {
    return this._size === 0;
  }

  public getFirst(): T | null {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.head.next!.item;
    }
  }
  public getLast(): T | null {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.tail.prev!.item;
    }
  }

  public append(target_next: Node<T>, item: T): void {
    const target: Node<T> = new Node<T>(item);

    target.next = target_next;
    target.prev = target_next.prev;

    target.prev!.next = target;
    target_next.prev = target;

    this._size++;
  }
  public push_front(item: T): void {
    this.append(this.head.next!, item);
  }
  public push_back(item: T): void {
    this.append(this.tail, item);
  }

  public delete(target: Node<T>): T | undefined {
    if (target === this.head || target === this.tail) return undefined;
    let prev: Node<T> = target.prev!;
    let next: Node<T> = target.next!;

    prev.next = next;
    next.prev = prev;

    this._size--;
    return target.item!;
  }
  public pop_front(): T | undefined {
    return this.delete(this.head.next!);
  }
  public pop_back(): T | undefined {
    return this.delete(this.tail.prev!);
  }

  public size(): number {
    return this._size;
  }
}

export class Queue<T> {
  private dq: LinkedList<T>;

  constructor() {
    this.dq = new LinkedList<T>();
  }

  // 공용
  public isEmpty(): boolean {
    return this.dq.size() === 0;
  }

  // 스택
  public push(item: T): void {
    this.dq.push_back(item);
  }
  public pop(): T | undefined {
    return this.dq.pop_back();
  }
  public top(): T | null {
    return this.dq.getLast();
  }

  // 큐
  public enqueue(item: T): void {
    this.dq.push_back(item);
  }
  public dequeue(): T | undefined {
    return this.dq.pop_front();
  }
  public front(): T | null {
    return this.dq.getFirst();
  }

  // .size 접근 제어
  get size(): number {
    return this.dq.size();
  }
  set size(_: number) {
    throw new Error("Queue의 사이즈를 변경할 수 없습니다.");
  }
}
