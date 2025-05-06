/**
 * 맵드 타입을 기반으로 만들어진 3개의 유틸리티 타입 1
 * Partial<T>, Required<T>, Readonly<T>
 */

// Partial<T>
// 부준적인, 일부분의
// 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const draft: Post = {
  // ❌ tags 프로퍼티가 없음
  title: "제목은 나중에 짓자...",
  content: "초안...",
};

// 모든 타입을 선택적으로 변형
const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};

/////////////
// 구현 Partial<T> 구현하기
type Partial<T> = {
  [key in keyof T]?: T[key];
};


///////////////
/**
 * Required<T>
 * 필수의, 필수적인
 * 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

// 반드시 썸네일 프로퍼티가 존재해야 하는 게시글
const withThumbnailPost_: Post = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  // thumbnailURL: "https://...", <- 이렇게 실수로 주석처리를 해도 타입 오류가 생기지 않음
};

const withThumbnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...", // 이렇게 해주면 선택적 프로퍼티를 강제할 수 있음
};

///////////////////////
// Required<T> 타입 구현
///////////////////////
type Required<T> = {
    [key in keyof T]-?: T[key]; // ?를 - 하면 됨됨
  };


///////////////
/**
 * Readonly<T> 
 * 읽기전용, 수정불가
 * 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

const readonlyPost: Readonly<Post> = {
    title: "보호된 게시글입니다.",
    tags: [],
    content: "",
  };
  
  readonlyPost.content = '해킹당함'; // ❌

  // Readonly<T> 구현하기
  type Readonly<T> = {
    readonly [key in keyof T]: T[key];
  };