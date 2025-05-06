/**
 * 인터페이스
 */

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "이정환",
  age: 27,
};

interface Person2 {
  readonly name: string;
  age?: number;
  sayHi: () => void;
  // 호출 시그니처 / 오버로딩할 떄는 이게 필요함함
  sayHello(): void;
  sayHello(a: number, b: number): void;
}

const person2: Person2 = {
  name: "이정환",
  // age: 27,
};

person2.name = "dd"; // readonly 라서 수정 안됨

// 주의할 점
/**
 * 인터페이스는 대부분의 상황에 타입 별칭과 동일하게 동작하지만 몇가지 차이점이 존재함 
 * 타입 별칭에서는 다음과 같이 Union이나 Intersection 타입을 
 * 정의할 수 있었던 반면 인터페이스에서 X
 */

type Type1 = number | string;
type Type2 = number & string;

interface Person__ {
  name: string;
  age: number;
} | number // ❌

type Type1_ = number | string | Person;
type Type2_ = number & string & Person;

const person_: Person__ & string = {
  name: "이정환",
  age: 27,
};