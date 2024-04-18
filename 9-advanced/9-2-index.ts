{
  const obj = {
    name: "ellie",
  };
  obj.name; //ellie
  obj["name"]; //ellie

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"];
  //Name의 type은 string이 됨 -> 동물에 있는 name이라는 키의 타입을 Name에 선언한거임
  const text: Name = "hello";

  type Gender = Animal["gender"]; //'male' | 'female'

  type Keys = keyof Animal;
  //Animal에 있는 모든 키를 타입으로 할당 -> 'name' | 'age' | 'gender'
  const key: Keys = "age";
}
