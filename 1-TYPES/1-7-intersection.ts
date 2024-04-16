{
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: string;
    work: () => void; //아무런 인자도 받지 않고 아무것도 리턴하지 않음
  };

  //입력 파라미터의 타입 지정
  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
    //Student, Worker 모든 것에 접근 가능
  }

  internWork({
    name: "혜인",
    score: 4,
    employeeId: "hyein",
    work: () => {},
  }); //대신 모든 데이터가 담겨있는 object를 전달해야함

  //반환 파라미터 지정
  /**
   * function internWork(): Student & Worker {
  return {
    name: "혜인",
    score: 4,
    employeeId: "hyein",
    work: () => console.log("Working")
  };
}

  */
}
