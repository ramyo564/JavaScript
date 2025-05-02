/**
 기본 타입간의 호환성
 */


/**
 * Unknown 타입
 */

function unknownExam() {
  let a: unknown = 1; // number -> unknown
  let b: unknown = "hello"; // string -> unknown
  let c: unknown = true; // boolean -> unknown
  let d: unknown = null; // null -> unknown
  let e: unknown = undefined; // undefined -> unknown
  let f: unknown = []; // Array -> unknown
  let g: unknown = {}; // Object -> unknown
  let h: unknown = () => {}; // Function -> unknown

  let unknownVar: unknown;

  // let num: number = unknownVar;
  // 오류 : unknown 타입은 number 타입에 할당할 수 없습니다.
  // 업캐스팅은 되지만 다운캐스팅은 안됨됨
}

/**
 * Never 타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;

  // 다운캐스팅 불가능
}

/**
 * void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    // return undefined; <- 가능 / 아래와 같은 원리리
  }

  // undefined 의 업캐스팅은 가능
  let voidVar: void = undefined;
}

/**
 * any 타입
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefined: undefined;
  let neverVar: never;

  // any는 다운캐스팅 가능
  anyVar = unknownVar;
  undefined = anyVar;

  // never는 불가능
  // neverVar = anyVar;
  
}
