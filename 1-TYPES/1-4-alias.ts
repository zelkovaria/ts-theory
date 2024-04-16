{
  /**
   * Type Alias는 내가 새로운 type을 지정할 수 있음
   */
  type Text = string;
  const name: Text = "elice";

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "hyein",
    age: 26,
    address: "서울특별시", //해당 type인 Student에 없는 속성을 입력하면 에러가 뜸
  };

  /**
   * String Literal Types
   * 타입을 문자열로도 지정할 수 있음
   */
  type Name = "name";
  let eliceName: Name;
  eliceName = "name";
  eliceName = "other"; //문자열 "name" Name이라는 타입이니까 다른 문자열은 못들어감
}
