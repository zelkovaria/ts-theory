{
  type ToDo = {
    title: string;
    description: string;
  };

  //Readonly라는 type이 이미 있고 읽기전용으로만 할 수 있음
  function display(todo: Readonly<ToDo>) {}
}
