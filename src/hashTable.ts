type Entry<K, V> = [K, V];

export class HashTable<K, V> {
  private storage: Entry<K, V>[][];
  private storageSize: number;

  constructor(size: number = 37) {
    this.storageSize = size;
    this.storage = [];

    for (let i = 0; i < this.storageSize; i++) {
      this.storage.push([]);
    }
  }

  private _hash(key: K): number {
    let hash = 0;
    const keyStr = String(key);

    for (let i = 0; i < keyStr.length; i++) {
      hash = (hash + keyStr.charCodeAt(i) * (i + 1)) % this.storageSize;
    }

    return Math.abs(hash);
  }

  public set(key: K, value: V): void {
    const index = this._hash(key);
    const bucket = this.storage[index];

    if (typeof bucket !== "undefined") {
      for (const entry of bucket) {
        if (entry[0] === key) {
          entry[1] = value;
          return;
        }
      }
      bucket.push([key, value]);
    }
  }

  public get(key: K): V | undefined {
    const index = this._hash(key);
    const bucket = this.storage[index];

    if (typeof bucket !== "undefined") {
      for (const entry of bucket) {
        if (entry[0] === key) return entry[1];
      }
    }
    return undefined;
  }

  public has(key: K): boolean {
    const index = this._hash(key);
    const bucket = this.storage[index];

    if (typeof bucket !== "undefined") {
      for (const entry of bucket) {
        if (entry[0] === key) return true;
      }
    }
    return false;
  }

  public entries(): Entry<K, V>[] {
    const result: Entry<K, V>[] = [];

    for (const bucket of this.storage) {
      for (const entry of bucket) {
        result.push(entry);
      }
    }

    return result;
  }

  public clear(): void {
    this.storage = [];
    for (let i = 0; i < this.storageSize; i++) {
      this.storage.push([]);
    }
  }
}
