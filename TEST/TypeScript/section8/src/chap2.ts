/**
 * Keyof 연산자
 * 객체 타입으로부터 프로퍼티의
 * 모든 key들을 String Literal Union 타입으로 추출하는 연산자
 */

interface Person {
  name: string;
  age: number;
}

// 이렇게 유니온 타입으로 쓰는 건 문제가 많음
// 나중에 Person의 프로퍼티가 많아지면 음..
function getPropertyKey(person: Person, key: "name" | "age") {
  return person[key];
}

const person: Person = {
  name: "이정환",
  age: 27,
};

interface Person2 {
  name: string;
  age: number;
  location: string; // 추가
}

// keyof 연산자 뒤에는 타입만 올 수 있음음
// type Person = typeof person;
// keyof typeof person 이런 식도 가능
function getPropertyKey2(person: Person2, key: keyof Person2) {
  return person2[key];
}

const person2: Person2 = {
  name: "이정환",
  age: 27,
  location: "한국",
};

