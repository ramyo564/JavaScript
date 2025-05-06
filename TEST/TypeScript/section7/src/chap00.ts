/**
 * 제네릭
 */

// 비추
function func(value: any) {
  return value;
}

// any 타입
let num = func(10);

// any 타입일 경우 이런부분에 있어서 오류를 잡기 어려움
num.toUpperCase(); 

// any 타입
let str = func("string");

///////////////////

// 제네릭
function func2<T>(value: T): T {
  return value;
}

// number 타입
let num2 = func2(10);

// 튜플타입
let arr = func2<[number, number, number]>([1, 2, 3]);
