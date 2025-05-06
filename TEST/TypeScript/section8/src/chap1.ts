/**
 * 인덱스드 엑세스 타입
 * 인덱스드 엑세스 타입은 인덱스를 이용해
 * 다른 타입내의 특정 프로퍼티의 타입을 추출하는 타입
 * 인덱스드 엑세스 타입은 객체, 배열, 튜플에 사용 가능
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number; // 추가
  };
}

// Post["author"] <= 값이 아니라 타입임
//  Post[key] <- 여기서 key는 변수임
// Post["author"]["id"] 이런식으로 가져와야함
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 25, // 추가
  },
};

// 배열 요소의 타입 추출하기
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 인덱스에 들어가는건 타입임 => number 이건 변수가 아님
// -> number 대신 숫자 0 리터럴 타입을 넣어도 동일함
const post_: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

// 튜플의 요소 타입 추출하기
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
// number

type Tup1 = Tup[1];
// string

type Tup2 = Tup[2];
// boolean

type Tup3 = Tup[number];
// number | string | boolean
