/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person: Person = {}; // 빈 객체는 Person 타입이 아니라서 오류발생생
person.name = "";
person.age = 23;

let person_ = {} as Person;
person.name = "";
person.age = 23;

/////////////////////////////

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도", // 추가 프로퍼티를 사용할 경우
} as Dog; // 아래와 같이 AS 사용

// 타입단언의 규칙
/**
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // ✅ // A <- B  / A가 B의 슈퍼타입
let num2 = 10 as unknown; // ✅ A가 B의 서브타입

let num3 = 10 as string; // ❌ // 둘이 안겹침

/**
 * 다중 단언 ( 비추천 )
 */
let num4_ = 10 as unknown as string;

/**
 * const 단언
 */

let num4 = 10 as const;
// 10 Number Literal 타입으로 단언됨

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// 모든 프로퍼티가 readonly를 갖도록 단언됨
// 수정 불가
// 상황에 따라 모든걸 readonly로 만들어야할 때 편리하게 사용

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string; // 선택적 프로퍼티
};

let post: Post = {
  title: "게시글1",
};

const len: number = post.author!.length; 
// !를 붙이면 null 이나 undefined 가 아니라고 생각함
// 업, 다운 캐스팅이 아니기 때문에 확실한 게 아니라면 비추천
