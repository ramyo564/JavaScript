/**
 * 유틸리티 타입이란
 * 유틸리티 타입이란 타입스크립트가 자체적으로 제공하는 특수한 타입 
 * 제네릭, 맵드 타입, 조건부 타입 등의 타입 조작 기능을 이용해 
 * 실무에서 자주 사용되는 유용한 타입들을 모아 놓은 것을 의미
 * 예를 들어 다음과 같이 Readonly<T>와 같은 유틸리티 타입을 이용해 
 * 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 변환할 수 있음
 * https://www.typescriptlang.org/docs/handbook/utility-types.html
 */

interface Person {
    name : string;
    age : number;
  }
  
  const person : Readonly<Person> ={
    name : "이정환",
    age : 27
  }
  
  person.name = ''
  // ❌ name은 Readonly 프로퍼티입니다.

  interface Person {
    name: string;
    age: number;
  }
  
  const person: Partial<Person> = {
    name: "이정환",
  };