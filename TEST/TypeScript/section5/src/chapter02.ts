/**
 * 인터페이스 선언 합치기
 * 타입 별칭은 동일한 스코프 내에 중복된 이름으로 선언할 수 없는 반면 인터페이스는 가능
 */

type Person_ = {
  name: string;
};

type Person_ = {
  //❌
  age: number;
};

interface Person {
  name: string;
}

interface Person {
  // ✅
  age: number;
}

// 이렇게 합쳐짐
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "이정환",
  age: 27,
};

// 충돌상황
interface Person {
  name: string;
}

interface Person {
  name: number; // 반드시 맞춰줘야함
  age: number;
}


/**
 * 모듈 보강시 자주 사용
 */

interface Library {
    a: number;
    b: number;
}

// 위와 같이 정의된 라이브러리를 사용하는데 추가적인게 필요할 경우
interface Library {
    c: string;
}