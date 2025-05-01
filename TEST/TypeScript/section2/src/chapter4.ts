// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

// 스코프가 다를 떄는 중복 별칭 가능
function test() {
  // 여기 있는 User 는 다른 스코프임임
  type User = string;
}

// --------------------
// 인덱스 시그니처

// 일반적인 방법법
type CountryCodes = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

// 인덱스 시그니처 사용
type CountryCodes_ = {
  [key: string]: string;
};

let countryCodes_: CountryCodes_ = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (... 약 100개의 국가)
  Brazil : 'bz'
};

// 인덱스 시그니처에서 반드시 포함해야하는 프로퍼티가 있어야되는 경우
type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

// 서로 호환되지 않을 경우 오류
// 인덱스 시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치

// type CountryNumberCodes = {
//   [key: string]: number;
//   Korea: string; // 오류!
// };