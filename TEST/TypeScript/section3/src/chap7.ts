/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

function func(value: number | string) {
  if (typeof value === "number") {
    // 타입가드
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

// instanceof 타입가드

function func2(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {  //instanceof 타입가드 
    // === "object" X 
    // null 일경우 object 가 Date라고 보장이 안됨
    console.log(value.getTime());
  }
}

//  in 타입 가드

type Person = {
  name: string;
  age: number;
};

function func3(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) { 
    // 타입 안에 type의 프로퍼티가 있는지 확인
    // && 를 사용해서 null 이 아닌 조건문을 써줘야함
    // in 다음에는 null 이나 undefined가 오면 안됨
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
