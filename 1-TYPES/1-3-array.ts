{
  //Arrays 표현방법
  const fruits: string[] = ["tomato", "banana"];
  //fruits는 string이라는 타입을 적은 다음에 []를 붙여서 배열임을 표시 가능
  const scores: Array<number> = [1, 3, 4];
  //scores는 숫자를 갖고있는 배열임을 표시 가능
  function printArray(fruits: readonly string[]) {
    //readonly를 붙이면 push등 불가능 -> 오직 읽는 것만 가능!!
    //이처럼 일관성있게 하고 싶을 때 Array<string>이 아니라 string[]꼴로 쓰기도함
  }

  //Tuple -> 배열인데 서로 다른 타입도 선언 가능 , 사용을 권장하지는 않음
  //interface, type alias, class로 대체해서 사용하는게 좋음
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  //이처럼 튜플은 접근하기 번거로우니까 아래처럼 구조분해할당을 해서 사용하기도 함
  const [name, age] = student; //배열 구조분해할당 !== 객체구조분해할당
}
