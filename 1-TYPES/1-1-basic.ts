{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array
   */

  //TypeScript
  //number 정수, 소수
  const num: number = -5;
  //string
  const str: string = "hello";
  //boolean true, false
  const bool: boolean = false;

  //undefined -> 값이 있는지 없는지 결정안됨
  //null -> 비어있음을 알려줌

  //undefined
  let name: undefined; // 💩
  let age: number | undefined; //보통 이렇게 or 넣어서 데이터가 있을수 있거나 없을 수 있음을 나타냄
  age = undefined;
  age = 6;

  function example(): number | undefined {
    return undefined;
  } //숫자나 undefined을 return하는 함수

  //null
  let person: null; // 💩
  let person2: string | null;

  //unknown -> 어떤 타입의 데이터가 담길지 모를 때 사용 -> 💩 안쓰는게 좋음
  //any -> 어떤 타입이든 담을 수 있는 변수 -> 💩 절대 안쓰는게 좋긴함

  //함수 void -> 아무것도 리턴하지 않는 경우!
  function print(): void {
    //void인 경우 : void 부분 생략 가능
    console.log("hello");
    return; //생략 가능
  }
  let unusable: void = undefined; // 💩

  //함수 never -> 리턴하는 값이 절대 없음 (에러를 던지거나 리턴되지 않는 경우->후자의 경우 while(true)일 때)
  function throwError(message: string): never {
    //meesage를 serever로 던져서 로그를 남김
    throw new Error(message);
    //에러를 던지거나 while문으로 끝나지 않게 하는 경우 사용
  }
  let neverEnding: never; // 💩

  //object -> 원시 타입을 제외한 모든 object 타입의 데이터든 담을 수 있음 // 💩 -> 구체적으로 작성해주는게 좋음
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "elice" });
  acceptSomeObject({ age: 6 });
}
