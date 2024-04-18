//Check type이 전달된 type이 string을 상속하면 boolean이 되고 아니면 number의 type을 갖게 됨
type Check<T> = T extends string ? boolean : number;
type Type = Check<string>; //boolean
//Check는 string이 되었으니 Type은 boolean type이 됨
