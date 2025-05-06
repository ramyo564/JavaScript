/**
 * 제네릭 클래스스
 */

class NumberList {
    constructor(private list: number[]) {}
  
      push(data: number) {
      this.list.push(data);
    }
  
    pop() {
      return this.list.pop();
    }
  
    print() {
      console.log(this.list);
    }
  }
  
  const numberList_ = new NumberList([1, 2, 3]);

  class List<T> {
    constructor(private list: T[]) {}
  
    push(data: T) {
      this.list.push(data);
    }
  
    pop() {
      return this.list.pop();
    }
  
    print() {
      console.log(this.list);
    }
  }
  
  const numberList = new List([1, 2, 3]);
  const stringList = new List(["1", "2"]);
  