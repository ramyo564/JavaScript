/**
 * 함수의 타입을 정의하는 방법
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과 값을 반환하는지 가독성 있게 표시

function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수 타입 정의하기
const add = (a: number, b: number): number => a + b;

// 함수의 매개변수 기본값 설정하기
function introduce(name: string = "이정환") {
  console.log(`name : ${name}`);
}

// 선택적 매개변수 설정
// 필수 매개변수는 항상 앞에 배치해야함
function introduce2(name = "이정환", tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
    // tall 은 undefined 값일 수 있어서 타입 가드를 사용해야
    // 위와 같이 연산 가능
  }
}

introduce2("이정환", 156);
introduce2("이정환");

// 나머지 매개변수
function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
  }

// 나머지 매개변수 길이고정
function getSum2(...rest: [number, number, number]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
  }
  
  getSum2(1, 2, 3)    // ✅
  getSum2(1, 2, 3, 4) // ❌