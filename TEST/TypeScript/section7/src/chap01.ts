/**
 * 타입 변수 응용하기
 */

// 사례 1 -> 타입 변수가 2개 일 때

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

////////////////////
// 사례 2 -> 다양한 배열 타입을 인수로 받는 제네릭 함수를 만들어야 할 때
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// number

let str = returnFirstValue([1, "hello", "mynameis"]);
// number | string
///////////////////////////////////////



//////////////////////////////////////
//사례 3 -> 배열의 첫번쨰 요소의 타입이 되도록 할 때
function returnFirstValue_<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str_ = returnFirstValue_([1, "hello", "mynameis"]);
// number

//////////////////////////////////////


//////////////////////////////////////
// 사례 4 -> 타입변수 제한

function getLength<T extends { length: number }>(data: T) {
    return data.length;
  }
  
  getLength("123");            // ✅
  
  getLength([1, 2, 3]);        // ✅
  
  getLength({ length: 1 });    // ✅
  
  getLength(undefined);        // ❌
  
  getLength(null);             // ❌

  getLength(10);             // ❌