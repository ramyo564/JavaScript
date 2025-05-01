// void 타입

function func2(): void {
  console.log("hello");
}

// null 로 설정할 경우 return 에 null 이 있어야함

function func(): null {
  console.log("hello");
  return null;
}

// never 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}


// 변수의 타입을 never로 정의하면 any를 포함해 그 어떠한 타입의 값도 이 변수에 담을 수 없게 됩니다
// let anyVar: any;
// (...)

// let a: never;
// a = 1;
// a = null;
// a = undefined;
// a = anyVar;

// TypeScript Version 5.1 이용시
// 타입스크립트 버전이 5.1로 업데이트 되면서 이제는 아무것도 반환하지 않는 함수의 반환값 타입으로 undefined을 명시해도 
// 문제가 발생하지 않도록 수정됨

function foo(): undefined {
    // no returns
}