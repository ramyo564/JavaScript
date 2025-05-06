/**
 * 조건부 타입
 */

type A = number extends string ? number : string;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
// string

let varB: StringNumberSwitch<string>;
// number

// 예제
function removeSpaces(text: string | undefined | null) {
  // 모든 공백을 없애는 함수
  return text.replaceAll(" ", ""); // ❌ text가 string이 아닐 수 있음
}

let result = removeSpaces("hi im winterlood");

// 타입조건을 좁히면?
function removeSpaces(text: string | undefined | null) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winterlood");
// string | undefined <- 여전히 사용 불가

///////////////////////////////////////////////////////
// 조건부 타입 적용
function removeSpaces_<T>(text: T): T extends string ? string : undefined {
  if (typeof text === "string") {
    return text.replaceAll(" ", ""); // ❌ 
    // 매개변수를 받기 전까지는 T가 뭔지 알 수가 없음 -> 조건부 타입또한 알 수가 없음
  } else {
    return undefined; // ❌
  }
}

let result_ = removeSpaces_("hi im winterlood");
// string

let result2_ = removeSpaces_(undefined);
// undefined

//////////////////////////////////////
// any를 써야함함
function removeSpaces2<T>(text: T): T extends string ? string : undefined {
    if (typeof text === "string") {
      return 0 as any; // 문제 감지 못함
    } else {
      return undefined as any;
    }
  }
  
  let result = removeSpaces2("hi im winterlood");
  // string
  
  let result2 = removeSpaces2(undefined);
  // undefined

/////////////////////////////////////////
// 함수오버로딩까지 다 사용하면 타입검사 OK
function removeSpaces3<T>(text: T): T extends string ? string : undefined; // <= 오버로드 시그니처
function removeSpaces3(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result__ = removeSpaces3("hi im winterlood");
// string

let result2__ = removeSpaces3(undefined);
// undefined