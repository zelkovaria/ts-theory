{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; //class level -> object마다 만들어지거나 생성되지않음
    coffeeBeans: number = 0; //instance level

    constructor(coffeeBeans: number) {
      //constructor는 object를 만들 때 항상 호출됨
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    makeCoffee(shots: number): CoffeeCup {
      //class 멤버 변수에 접근할 때는 this를 붙여줘야함
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        //static 변수는 class명 지정해줘야함
        throw new Error("not enough");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shots, // shots로 생략 가능
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);

  const maker2 = CoffeeMaker.makeMachine(3); //static이 붙은 메서드는 바로 호출 가능
}
