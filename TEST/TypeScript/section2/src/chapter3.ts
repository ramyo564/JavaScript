// object로 정의하기
// let user: object = {
//     id: 1,
//     name: "이정환",
//   };

// user.id; <- 오류생김김

// 객체 리터럴 타입
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user.id;

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

// 특수한 프로퍼티 정의하기
let user2: {
    id?: number; // 선택적 프로퍼티가 된 id
    name: string;
  } = {
    id: 1,
    name: "이정환",
  };
  
  user2 = {
    // id: "id", 오류 발생!  <- 원래 타입에 맞춰서 해줘야함함
    name: "홍길동",
  };
  

// 읽기 전용 프로퍼티
let user3: {
    id?: number;
    readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
  } = {
    id: 1,
    name: "이정환",
  };
  
//   user3.name = "dskfd"; // 오류 발생 <- 읽기 전용을 붙였을 때는 프로퍼티 값 수정이 안됨됨