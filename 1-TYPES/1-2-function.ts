{
  //JavaScriipt
  function isAdd(num1, num2) {
    return num1 + num2;
  }

  //TypeScript
  function add(num1: number, num2: number): number {
    //각각 숫자를 전달받아 숫자를 리턴함을 알 수 있음
    return num1 + num2;
  }

  //JavaScript
  function jsFetchNum(id) {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //TypeScript
  function tsFetchNum(id: string): Promise<number> {
    //string 형태의 id를 받아서 Promise를 반환하는데,  Promise는 fetch가 완료된 후 숫자를 반환하겠구나!를 알 수 있음

    //code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Optional Parameter ?는 언제 사용할까 -> 전달받을 수도 있고 전달받지 않을 수도 있을 때
  function printName(firstName: string, lastName?: string) {
    //firstName은 string으로 넘어와야하지만 lastName은 string 형식으로 들어올 수도 있고 들어오지 않을 수도 있음
    console.log(firstName);
    console.log(lastName);
  }

  printName("steve", "jobs");
  printName("hyein");
  printName("Anna", undefined); //undefined도 가능

  //Default Parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }

  printMessage(); // message를 전달하지 않아도 message의 기본값인 "default message"가 출력됨

  //Rest Parameter
  function addNumber(...number: number[]): number {
    //number라는 배열은 number로만 구성된 배열임
    return number.reduce((a, b) => a + b);
  }

  console.log(addNumber(1, 2, 3, 4)); //10출력됨
}
