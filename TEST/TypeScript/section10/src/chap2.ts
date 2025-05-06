/**
 * 맵드 타입을 기반으로 만들어진 3개의 유틸리티 타입 2
 * Pick<T,K> Omit<T,K> Record<V,K>
 */

/**
 * Pick<T, K>
 * 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// ❌ tag 프로퍼티가 없음
const legacyPost_: Post = {
  title: "",
  content: "",
};

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "",
  content: "",
};
// 추출된 타입 : { title : string; content : string }

// Pick<T, K> 타입 구현하기
type Pick<T, K extends keyof T> = {
  // K가 T의 key로만 이루어진 String Literal Union 타입임을 보장해 주어야 함
  // 'title' | 'content'  extends 'title' | 'tag' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};

/**
 * Omit<T, K>
 * 생략, 빼다
 * 특정 객체 타입으로부터 특정 프로퍼티 만을 제거하는 타입
 * 예를 들어 Omit 타입에 T가 name, age가 있는 객체 타입이고
 * K가 name 이라면 결과는 name을 제외하고 age 프로퍼티만 존재하는 객체 타입이 됨
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// ❌
const noTitlePost_: Post = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

const noTitlePost: Omit<Post, "title"> = {
  // 특정 타입 제거 -> title 제거
  content: "",
  tags: [],
  thumbnailURL: "",
};

// Omit<T, K> 구현하기
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL' , 'title>>
// exclude는 뒤에 전달 받는 타입 변수에서 앞에 타입이 중복되는걸 제거
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

/**
 * Record<K, V>
 * 굉장히 자주 쓰임
 */

type Thumbnail_ = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
};

type Thumbnail_Legacy = {
  // (...) 이런식으로 변경이나 수정, 추가를 할 때 굉장히 번거롭고 힘듬
  watch: {
    url: string;
  };
};

type Thumbnail = Record<
  "large" | "medium" | "small",
  { url: string; size: number }
>;

// Record<K, V> 구현하기

type Record<K extends keyof any, V> = {
  // any를 쓰는 이유는 무슨 타입인지는 모르겠지만 어떤 객체의 키 탑임
  [key in K]: V;
};
