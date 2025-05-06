/**
 * 분산적인 조건부 타입
 */

// 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
// string

let b: StringNumberSwitch<string>;
// number

// 분산적인 조건 타입
let c: StringNumberSwitch<number | string>;
// string | number

let d: StringNumberSwitch<number | string | boolean>;
// string | number

/**
 * Exclude 조건부 타입 구현하기
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1 단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2 단계
// number |
// never  |
// boolean

// 결과
// number | never | boolean
// -> never 는 없어짐 왜냐면 아무것도 아니라서 합집합을 하면 걍 없어짐

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

// 1 단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2 단계
// never   |
// string  |
// never

///////////////////////
// 분산 방지법
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;

let a_: StringNumberSwitch2<number>;
// string

let b_: StringNumberSwitch2<string>;
// number

let d_: StringNumberSwitch2<number | string | boolean>;
// number

// 1단계
// StringNumberSwitch2<number>  |
// StringNumberSwitch2<string>  |
// StringNumberSwitch2<boolean> |

// 2단계
// string
// number
// number

// [number | string | boolean] 합집합 유니온 타입은 [number] 에 못 들어감
// [유니온타입] <- 그냥 하나로 봄
// 타입은 -> number 가 됨됨
