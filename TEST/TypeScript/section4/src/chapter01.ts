/**
 * 함수 타입 표현식
 */

type Add = (a: number, b: number) => number;
const add_: Add = (a, b) => a + b;

type Operation = (a: number, b: number) => number;

// 같은 거임
const add: (a: number, b: number) => number = (a, b) => a + b;

const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니쳐
 */
type Operation2 = {
  (a: number, b: number): number;
  name: string; // <- 하이브리드 타입
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2(1, 2);
add2.name;