/**
 객체 타입간의 호환성
 -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // ✅ OK
dog = animal; // ❌ NO

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook; // ✅ OK
programmingBook = book; // ❌ NO

/**
 *초과프로퍼티 검사 -> 이럴때만 안됨됨
 */

let book2: Book = {
  // 오류 발생
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

// 아래와 같은 경우로만 캐스팅 가능

let book3: Book = programmingBook; // 앞서 만들어둔 변수

function func(book: Book) {}

func({ // 오류 발생
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
});