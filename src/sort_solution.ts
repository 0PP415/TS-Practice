type SortOrder = "asc" | "desc";
type CompareFn<T> = (a: T, b: T) => number;

function createCompareFunction<T>(order: SortOrder): CompareFn<T> {
  if (order === "desc") {
    return function (a: T, b: T): number {
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    };
  } else {
    return function (a: T, b: T): number {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    };
  }
}

export function simpleSort<T>(arr: T[], ord: SortOrder = "asc"): T[] {
  if (arr.length <= 1) {
    return [...arr];
  }

  const result = [...arr];
  const compare = createCompareFunction<T>(ord);
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (compare(result[j], result[j + 1]) > 0) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break; // 최적화: 교체가 없으면 이미 정렬된 상태
    }
  }
  return result;
}
