/**
 대수타입
 -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 -> 합집합 타입과 교집합 타입이 있음
 */

// 합집합 타입 - Union 타입
let a: string | number;

a = 1;
a = "hello";

// 합집합 타입 - Union 타입 (무한대)
let b: string | number | boolean;

b = 1;
b = "hello";
b = true;

//Union 타입으로 배열 타입 정의하기
let arr: (number | string | boolean)[] = [1, "hello", true];

// Union 타입과 객체 타입
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  // ✅
  name: "",
  color: "",
};

let union2: Union1 = {
  // ✅
  name: "",
  language: "",
};

let union3: Union1 = {
  // ✅
  name: "",
  color: "",
  language: "",
};

let union4: Union1 = {
  // ❌
  name: "",
};

// 교집합(Intersection) 타입
let variable: number & string;
// never 타입으로 추론된다

/**
 * number 타입과 string 타입은 서로 교집합을 공유하지 않는 서로소 집합이므로 
 * 변수 variable의 타입은 결국 never 타입으로 추론됨
대다수의 기본 타입들 간에는 서로 공유하는 교집합이 없기 때문에 
이런 인터섹션 타입은 보통 
                        객체 타입들에 자주 사용됩니다. 
 */

type Dog2 = {
  name: string;
  color: string;
};

type Person2 = {
  name: string;
  language: string;
};

type Intersection = Dog2 & Person2;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
