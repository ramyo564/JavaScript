// 배열
let numArr: number[] = [1, 2, 3]
let strArr: string[] = ["hello", "im", "winterlood"];

let boolArr: Array<boolean> = [true, false, true];

// 다양한 타입 요소를 갖는 배열 타입 정의하기
// let multiArr = [1, "hello"];
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열
let doubleArr : number[][] = [
    [1, 2, 3], 
    [4, 5],
  ];

// 튜플
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];

// 튜플도 결국 배열이기 때문에 pop 이나 push 연산은 조심해야함

// 튜플사용이유
// const users: [string, number][] = [
//     ["이정환", 1],
//     ["이아무개", 2],
//     ["김아무개", 3],
//     ["박아무개", 4],
//     [5, "조아무개"], // 오류 발생
//   ];
  