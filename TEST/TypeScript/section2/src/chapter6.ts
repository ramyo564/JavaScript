// any 타입 (비추천천)
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

// unknown 타입
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// unknown 타입의 값은 어떤 타입의 변수에도 저장 X
// num = unknownVar; // 오류 !

// unknown 타입의 값은 어떤 연산에도 참여할 수 없으며, 어떤 메서드도 사용 X
// unknownVar * 2 // 오류!

// unknown 타입의 값을 number 타입의 값처럼 취급하고 곱셈 연산을 수행하게 하고 싶다면 
// 다음과 같이 조건문을 이용해 이 값이 number 타입의 값임을 보장해줘야 함

if (typeof unknownVar === "number") {
	// 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  unknownVar * 2;
}