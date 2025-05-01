// 열거형(Enum) 타입

// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role_ {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
  }

// 자동할당

enum Role {
    ADMIN, // 0 할당(자동)
    USER,  // 1 할당(자동)
    GUEST, // 2 할당(자동)
  }
  
  const user1 = {
    name: "이정환",
    role: Role.ADMIN, // 0
  };
  
  const user2 = {
    name: "홍길동",
    role: Role.USER, // 1
  };
  
  const user3 = {
    name: "아무개",
    role: Role.GUEST, // 2
  };
  
// 컴파일 되었을 떄 결과값값
// var Role;
// (function (Role) {
//     Role[Role["ADMIN"] = 0] = "ADMIN";
//     Role[Role["USER"] = 1] = "USER";
//     Role[Role["GUEST"] = 2] = "GUEST";
// })(Role || (Role = {}));
// var Language;
// (function (Language) {
//     Language["korean"] = "ko";
//     Language["english"] = "en";
//     Language["japanese"] = "jp";
// })(Language || (Language = {}));
// const user1 = {
