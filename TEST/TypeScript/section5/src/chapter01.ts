/**
 * 인터페이스 확장
 */

// age를 다른걸로 바꿀 경우 모든걸 다 바꿔줘야함 -> 매우 불편
interface Animal_ {
    name: string;
    age: number;
  }
  
  interface Dog_ {
    name: string;
    age: number;
    isBark: boolean;
  }
  
  interface Cat_ {
    name: string;
    age: number;
    isScratch: boolean;
  }
  
  interface Chicken_ {
    name: string;
    age: number;
    isFly: boolean;
  }


// 확장(상속)은 아래와 같이 구현
interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  breed: string;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  breed: "",
  isScratch: true,
};
