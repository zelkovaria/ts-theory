{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
    //기존의 todo에 추가로 업데이트 하고싶은 fieldsToUpdate를 더해서 업데이트
  }

  const todo: ToDo = {
    title: "learn TS",
    description: "content",
    label: "study",
    priority: "high",
  };
  const updated = updateTodo(todo, { priority: "low" });
  console.log(updated); //priority만 low로 변경되어 출력됨
}
