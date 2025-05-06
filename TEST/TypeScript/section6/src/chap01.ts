/**
 * 클래스
 */

class Employee {
  // 필드
  name: string = "";
  age: number = 0;
  position: string = "";

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

const employeeB = new Employee("김낄낄", 30, "인간");
console.log(employeeB);

// 클래스 -> 타입으로도 활용 가능
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

// 클래스 -> 상속클래스 가능
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
