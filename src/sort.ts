/*
    어 근데 내림차순 추가해야하면 엉떡하지??
    함수 매개변수 추가되서 시그니처가 안맞는데?
    -> default 매개변수를 추가하자
*/

// order 이 추가되었으니, 코드를 수정합시다. 근데,
// order를 "제한할 수 있지 않을까?"
// 타입 스크립트잖아,,, 타입! 타입! 타입!

// 그래서 오름/내림 차순 두가지만 들어온다고 생각했을때,
// order을 literal 으로 제한해두었다.

export function simpleSort(
  arr: number[],
  order: "asc" | "desc" = "asc"
): number[] {
  // 매개변수는 기본적으로 레퍼런스
  // 따라서 리스트 같은 변수를 복사할려면
  // 구조분해할당을 사용하자
  const sortedArr: number[] = [...arr];

  // 리스트 내부 원소에 arr이 있다면
  // 함수를 종료시켜서 내부 원소에 undefined 이 없도록 보장하자
  // 물론 O(n) 만큼의 시간이 추가로 더 걸리겠지만
  // 안정성과 시간 중 저울질을 해보아야 할 문제 아닐까?
  for (const element of sortedArr) {
    if (element === undefined) return arr;
  }

  // 두 수를 입력받아 order을 기준으로
  // 차이를 판별하여 boolean 값을 반환
  // 등호를 포함 안하니 안정 정렬 이겠지?
  const compare = (a: number, b: number): boolean => {
    if (order === "asc") return a > b;
    else return a < b;
  };

  // 위에서 배열 내에는 undefined 이 없음을 보장 했으므로
  // ! 를 사용하여 확실히 number 라는 것을 알려주자
  for (let i: number = 0; i < sortedArr.length - 1; i++) {
    for (let j: number = 0; j < sortedArr.length - 1 - i; j++) {
      if (compare(sortedArr[j]!, sortedArr[j + 1]!)) {
        const tmp: number = sortedArr[j]!;
        sortedArr[j] = sortedArr[j + 1]!;
        sortedArr[j + 1] = tmp;
      }
    }
  }

  return sortedArr;
}

/*
    export: 함수를 외부로 노출 시킬게
    function: 파이썬의 def, 이건 함수야 라고 정의
    ~~~
*/

/*
    undefine => "값" ?? 무슨 에러지?
        -> [1, undefine] 같은 값이 올 수도 있다.....

    해결법
    1. undefine을 만나면 return (종료) 즉, 걸러내거나
    2. 아니면 아예 undefine 이 없도록 하거나
    ( 사실 이건 범용적인 해결 방안임 )

    근데 아무튼 일단은 잘 작동하는데 but,
    " 해결은 해야한다 "
*/
