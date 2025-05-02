/**
 * 서로소 유니온 타입
 * 서로소 유니온 타입은 교집합이 없는 타입들
 * 즉 서로소 관계에 있는 타입들을 모아 만든 유니온 타입
 *
 * 교집합이 없는 타입들로만 만든 유니온 타입 (합집합)
 */

type Admin = {
  name: string;
  kickCount: number;
};

type Member = {
  name: string;
  point: number;
};

type Guest = {
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  if ("kickCount" in user) {
    // Admin
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
  } else if ("point" in user) {
    // Member
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
    // Guest
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}

type Admin2 = {
  tag: "ADMIN"; // 리터럴값은 딱 1개의 값만 갖을 수 있음 -> 서로서 관계를 형성할 수 있음
  name: string;
  kickCount: number;
};

type Member2 = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest2 = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User2 = Admin2 | Member2 | Guest2;

function login2(user: User2) {
  if (user.tag === "ADMIN") {
    // tag로 활용
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}

function login3(user: User2) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
      break;
    }
  }
}

// 응용 -> 비동기 작업의 결과를 처리하는 객체

type AsyncTask = {
  state: "LOADING" | "FAILED" | "SUCCESS";
  error?: {
    message: "오류발생";
  };
  response?: {
    data: "data";
  };
};

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류발생",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "data",
  },
};

// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 : 에러메시지를 출력
// 성공 -> 성공 : 데이터를 출력

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      console.log(`에러발생 : ${task.error?.message}`);
      // ? 옵셔널 체이닝 -> 타입이 안 좁혀짐
      // -> 안전하지 않은 코드 -> 그냥 나눠줘야함
      break;
    }
    case "SUCCESS": {
      console.log(`성공:${task.response?.data}`);
      break;
    }
  }
}

type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask2 = LoadingTask | FailedTask | SuccessTask;

function processResult2(task: AsyncTask2) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      console.log(`에러발생 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공:${task.response.data}`);
      break;
    }
  }
}

// AsyncTask2 와 같은 방법으로 선택적 프로퍼티보다는
// 태그 프로퍼티로 서로소 타입으로 만드는 게 좋음
