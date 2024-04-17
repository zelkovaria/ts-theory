{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //public
  //private -> 외부에서 접근이 불가능해짐
  //protected -> 상속시 외부에서는 접근이 안되지만 클래스를 상속한 다른 자식 클래스 내에서는 접근이 가능함
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      //따로 작성안하면 public이 됨
      if (beans < 0) {
        throw new Error("옳지 않은 값");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("not enough");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  //   maker.coffeeBeans = 3;
  //private인 coffeBeans 값 접근에 불가능

  /////////// /////////// ///////////
  class User {
    firsName: string;
    lastName: string;

    get fullName(): string {
      return `${this.firsName} ${this.lastName}`;
    }

    constructor(firstName: string, lastName: string) {
      this.firsName = firstName;
      this.lastName = lastName;
    }
  }
  const user = new User("Steve", "Jobs");
  console.log(user.fullName);
  user.firsName = "hyein"; //setter, getter를 통해 constructor로 고정되었던 값 변경 가능
  console.log(user.fullName);
}
