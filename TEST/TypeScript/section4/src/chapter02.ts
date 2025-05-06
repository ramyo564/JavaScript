/**
 * 함수 타입의 호환성이란?
 *
 * 특정 함수 타입을 다른 함수 타입으로 괜찮은지 판단하는 것을 의미
 * 1. 두 함수의 반환값 타입이 호환되는가?
 * 2. 두 함수의 매개변수의 타입이 호환되는가?
 */

// 기준 1 : 반환값 타입이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // ✅
b = a; // ❌

//////////////////

// 기준 2 : 매개변수의 타입이 호환되는가?
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d; // ❌
d = c; // ✅

/////////////////////

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

animalFunc = dogFunc; // ❌
dogFunc = animalFunc; // ✅


// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅
func2 = func1; // ❌