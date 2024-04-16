{
  /**
   * Enum -> 여러가지 관련된 상수값을 한 곳에 모아 정리할 수 있게 해줌, ts 자체 제공
   *  => 가능하면 안 쓰는게 좋음(enum으로 타입이 지정된 변수에 어떤 숫자든 할당이 가능해져서)
   */

  //JavaScript
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //TypeScript
  enum DAYS {
    MONDAY, //0
    TUESDAY, //1
    WEDNESDAY, //2 로 값이 자동으로 들어감
    Friday = "friday", //문자열 지정 이후에는 값이 자동으로 안생기므로 따로 지정해줘야함
    Saturday = "saturday",
  }
  const day = DAYS.TUESDAY;
  console.log(day); // 1이 출력됨

  //enum은 String Literal Types으로 대체될 수 있기 때문에 비추!
  type DaysOfWeek = "MONDAY" | "TUESDAY" | "WEDNESDAY";
  let dayOfweek: DaysOfWeek = "MONDAY";
  dayOfweek = "hyein"; //없는 값을 지정하면 type 에러가 뜸. 이게 enum보다 안전하고 좋음
}
