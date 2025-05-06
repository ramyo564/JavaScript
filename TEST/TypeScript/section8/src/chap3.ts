/**
 * 맵드 타입
 * 기존의 객체 타입을 기반으로 새로운 객체 타입을 만드는 마법같은 타입 조작 기능
 */

interface User {
  id: number;
  name: string;
  age: number;
}

function fetchUser(): User {
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

function updateUser(user: User) {
  // ... 유저 정보 수정 기능
}

updateUser({
  // ❌
  age: 25,
});

type PartialUser = {
  id?: number;
  name?: string;
  age?: number;
};

function updateUser(user: PartialUser) {
  // ... 유저 정보 수정 기능
}

updateUser({
  // ✅
  age: 25,
});

///////////////////////////////////////////
// 위와 같을 떄 맵드 타입이 필요함
// 선택적 프로퍼티로 바뀜
type PartialUser_ = {
  [key in "id" | "name" | "age"]?: User[key];
};

// 모두 boolean 으로 바꾸고 싶을 떄
type BooleanUser = {
    [key in "id" | "name" | "age"]: boolean;
}

// "id" | "name" | "age"  =  keyof User 같은거임
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

function fetchUserReadOnly(): ReadonlyUser {
    return {
      id: 1,
      name: "이정환",
      age: 27,
    };
  }
  

const user = fetchUserReadOnly();
user.id = 1; // 수정 불가능

// 맵드 타입은 인터페이스로 사용 불가