/*

class Node<T> {
  item: T | null = null;
  next: Node<T> | null = null;
  prev: Node<T> | null = null;

  constructor() {}
}

// append(T)
// size()
// printList()
// delete(T)
// search(T)
// printListReverse()
// getFirst()
// getLast()

export class LinkedList<T> {
  head: Node<T>;
  tail: Node<T>;

  constructor() {
    this.head = new Node<T>();
    this.tail = new Node<T>();

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  public isEmpty(): Boolean {
    if (this.head.next === this.tail) {
      return true;
    } else {
      return false;
    }
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

  public append(item: T): void {
    const target: Node<T> = new Node<T>();
    target.item = item;

    target.next = this.tail;
    target.prev = this.tail.prev;

    this.tail.prev!.next = target;
    this.tail.prev = target;
  }
  public delete(item: T): void {
    if (this.isEmpty()) return;

    let target: Node<T> = this.head.next!;
    while (target !== this.tail && item !== target.item) {
      target = target.next!;
    }

    if (target === this.tail) return;
    else {
      target.next!.prev = target.prev;
      target.prev!.next = target.next;
    }
  }
  public search(item: T): number | null {
    if (this.isEmpty()) return null;

    let index = 1;
    let target: Node<T> = this.head.next!;
    while (target !== this.tail && item !== target.item) {
      target = target.next!;
      index++;
    }

    if (target === this.tail) return null;
    else return index;
  }

  public size(): number {
    let size = 0;
    let now: Node<T> = this.head;
    while (now.next !== this.tail) {
      now = now.next!;
      size++;
    }
    return size;
  }

  public printList(): T[] {
    const list: T[] = [];
    let now: Node<T> = this.head.next!;
    while (now !== this.tail) {
      list.push(now.item!);
      now = now.next!;
    }
    return list;
  }
  public printListReverse(): T[] {
    const list: T[] = [];
    let now: Node<T> = this.tail.prev!;
    while (now !== this.head) {
      list.push(now.item!);
      now = now.prev!;
    }
    return list;
  }
}

*/

class Node<T> {
  item: T | null;
  next: Node<T> | null = null;
  prev: Node<T> | null = null;

  // 생성자가 item 을 받도록 수정, 기본값으로 null
  constructor(item: T | null = null) {
    this.item = item;
  }
}

export class LinkedList<T> {
  head: Node<T>;
  tail: Node<T>;

  constructor() {
    this.head = new Node<T>();
    this.tail = new Node<T>();

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Boolean 은 객체 Wrapper 타입 -> 기본 타입인 boolean 으로 교체
  // 불필요한 if문 제거하고 비교 결과 자체를 반환 ( 내 습관 중 하나임,,, 고치자 )
  public isEmpty(): boolean {
    return this.head.next === this.tail;
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

  public append(item: T): void {
    const target: Node<T> = new Node<T>(item);

    target.next = this.tail;
    target.prev = this.tail.prev;

    this.tail.prev!.next = target;
    this.tail.prev = target;
  }
  public delete(item: T): void {
    if (this.isEmpty()) return;

    let target: Node<T> = this.head.next!;
    while (target !== this.tail && item !== target.item) {
      target = target.next!;
    }

    if (target === this.tail) return;
    else {
      target.next!.prev = target.prev;
      target.prev!.next = target.next;
    }
  }
  public search(item: T): number | null {
    if (this.isEmpty()) return null;

    let index = 1;
    let target: Node<T> = this.head.next!;
    while (target !== this.tail && item !== target.item) {
      target = target.next!;
      index++;
    }

    if (target === this.tail) return null;
    else return index;
  }

  public size(): number {
    let size = 0;
    let now: Node<T> = this.head;
    while (now.next !== this.tail) {
      now = now.next!;
      size++;
    }
    return size;
  }

  public printList(): T[] {
    const list: T[] = [];
    let now: Node<T> = this.head.next!;
    while (now !== this.tail) {
      list.push(now.item!);
      now = now.next!;
    }
    return list;
  }
  public printListReverse(): T[] {
    const list: T[] = [];
    let now: Node<T> = this.tail.prev!;
    while (now !== this.head) {
      list.push(now.item!);
      now = now.prev!;
    }
    return list;
  }
}
