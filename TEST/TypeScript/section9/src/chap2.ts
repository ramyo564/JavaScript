/**
 * infer
 * infer는 조건부 타입 내에서 특정 타입을 추론하는 문법
 * infer는 다음과 같이 특정 **함수 타입**에서 반환값의 타입만 추출하는
 * 특수한 조건부 타입인 ReturnType을 만들 때 이용 가능
 */

type Func_ = () => string;

type ReturnType_<T> = T extends () => string ? string : never;

type A_ = ReturnType_<Func_>;
// string

type FuncB_ = () => number;

type B_ = ReturnType<FuncB_>;
// never -> never 와 string은 서로소 관계 -> 서로 서브, 슈퍼타입이 아님 -> 거짓

/////////////////////////
/////////// infer 
type ReturnType<T> = T extends () => infer R ? R : never;

type FuncA = () => string;

type FuncB = () => number;

type A = ReturnType<FuncA>;
// string

type B = ReturnType<FuncB>;
// number

type C = ReturnType<number>;
// 조건식을 만족하는 R추론 불가능
// never


/////
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string