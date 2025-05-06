/**
 * 접근 제어자
 * Access Modifier
 * Public , Private , Protected
 */

// Public -> 기본이 public 임
// Private -> readonly와는 다르게 읽을 수도 없음
// Protected -> 파생 클래스에서는 사용 가능
class Employee {
    // 필드
    private name: string;      // 외부 접근 안됨
    public age: number;       // 자동으로 public
    protected position: string;  // 파생 클래스에서는 사용 가능
  
    // 생성자 -> 굳이 또 접근제어자에 할 필요 없음 -> public이 디폴트트
    constructor(name: string, age: number, position: string) {
      this.name = name;
      this.age = age;
      this.position = position;
    }
  
    // 메서드
    work() {
      console.log("일함");
      // 내부에서는 private 접근 가능
      console.log(`${this.name}`); 
    }
  }
  
  const employee = new Employee("이정환", 27, "devloper");
  
  employee.name = "홍길동";
  employee.age = 30;
  employee.position = "디자이너";


  class Employee_ {
    // 필드 없어도 가능

    // 생성자
    constructor(
      private name: string,
      protected age: number,
      public position: string
    ) {}
  
    // 메서드
    work() {
      console.log(`${this.name} 일함`);
    }
  }