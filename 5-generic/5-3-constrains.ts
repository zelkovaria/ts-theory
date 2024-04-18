interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time!");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time!");
  }
  workPartTime() {}
}
//Employee를 받아서 월급 지급 후 직원을 다시 리턴함
//세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하므로 💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

//generic이긴한데 Employee를 확장한 타입만 가능하다라는 의미가 됨
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const elie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
elie.workFullTime();
bob.workPartTime();

const elieAfterPay = pay(elie);
const bobAfterPay = pay(bob);
