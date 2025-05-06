/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니쳐와 함께 사용하기
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap: NumberMap = {
  key: -123,
  key2: 123,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};

/**
 * 제네릭 인터페이스 활용 예
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User {
  name: string;
  profile: Student | Developer;
}

function goToSchool(user: User) {
  if (user.profile.type !== "student") {
    console.log("잘 못 오셨습니다");
    return;
  }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User = {
  name: "이정환",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "가톨릭대학교",
  },
};

/////// 제네릭으로 전환/////////

interface Student_ {
    type: "student";
    school: string;
  }
  
  interface Developer_ {
    type: "developer";
    skill: string;
  }
  
  interface User_<T> {
    name: string;
    profile: T;
  }
  
  function goToSchool_(user: User_<Student_>) {
    // if (user.profile.type !== "student") {
    //   console.log("잘 못 오셨습니다");
    //   return;
    // }
    // -> 타입 좁히기가 필요 없어짐
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
  }
  
  const developerUser_: User_<Developer_> = {
    name: "이정환",
    profile: {
      type: "developer",
      skill: "typescript",
    },
  };
  
  const studentUser_: User_<Student_> = {
    name: "홍길동",
    profile: {
      type: "student",
      school: "가톨릭대학교",
    },
  };