/**
 * 조건부 타입의 유틸리티 타입들들
 * Exclude<T, K> , Extract<T, U> , ReturnType<T>
 */

/**
 * Exclude<T, K>
 * Exclude 타입은 다음과 같이 T로부터 U를 제거하는 타입
 */

type A = Exclude<string | boolean, string>;
// boolean
// 1단계 
// Exclude<String, boolean> |
// Exclude<boolean, boolean>

// 2단계
// string |
// never

// 최종적으로 string | never = 합집합에서 never는 공집합이니 삭제
// 결과는 string

// Exclude<T, K> 구현
type Exlcude<T, U> = T extends U ? never : T;

/**
 * Extract<T, K>
 * Extract 타입은 다음과 같이 T로 부터 U를 추출하는 타입
 */

type B = Extract<string | boolean, boolean>;
// boolean

// Extract<T, K> 구현
type Extract<T, U> = T extends U ? T : never;

/**
 * ReturnType
 * 타입변수 T에 할당된 함수 타입의 반환값 타입을 추출하는 타입
 */

// 직접구현
type ReturnType<T extends (...args: any) => any> = T extends (
    ...agrs: any
  ) => infer R
    ? R
    : never;
  
  function funcA() {
    return "hello";
  }
  
  function funcB() {
    return 10;
  }
  
  type ReturnA = ReturnType<typeof funcA>;
  // string
  
  type ReturnB = ReturnType<typeof funcB>;
  // number