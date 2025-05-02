/**
* 타입추론
 */

// 변수선언

let a_ = 10;
// number 타입으로 추론


 // 오류 -> 매개변수는 타입 지정해줘야함
function func(param){

}


let a = 10;
// number 타입으로 추론

let b = "hello";
// string 타입으로 추론

let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};
// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론



// 구조 분해 할당
let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

// 함수의 반환값
function func2() {
    return "hello";
  }
  // 반환값이 string 타입으로 추론된다



// 기본값이 설정된 매개변수
function func3(message = "hello") {
    return "hello";
  }


// 주의해야 할 상황들

// 1. 암시적으로 any 타입으로 추론
let d;
// 암시적인 any 타입으로 추론
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
d.toFixed(); // 오류 

// d = 10; 다음 라인부터는 d가 number 타입이 되고, 
// d = “hello” 다음 라인부터는 d가 string 타입이 된다. 
// 따라서 마지막 라인에서 d가 string 타입일 때 toFixed 같은 
// number 타입의 메서드를 사용하려고 하면 오류가 발생 
// 이렇게 암시적으로 추론된 any 타입은 코드의 흐름에 따라 타입이 계속 변화한다. 
// 이를 any의 진화라고 표현하기도 한다.

// 2. const 상수의 추론
const num = 10;
// 10 Number Literal 타입으로 추론

const str = "hello";
// "hello" String Literal 타입으로 추론

// 3. 최적 공통 타입(Best Common Type)
let arr = [1, "string"];
// (string | number)[] 타입으로 추론