{
  type Video = {
    title: string;
    author: string;
  };

  //기본 형식
  type Optional<T> = {
    // 받아온 타입을 통해 map을 사용함
    //T가 갖고있는 key들 중 들어있는 하나의 P는~ 하고 정의 가능
    [P in keyof T]?: T[P]; // for...in
  };

  type VideoOptional = Optional<Video>;
  //Optional에 전달된 Video는 Video의 key들을 돌면서 title, author를 optional로 만들고 형식도 지정해줌

  //사용 예시
  const videoOp: VideoOptional = {
    title: "hi",
    //author는 생략 가능
  };
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // }; 하나하나 다 복사해주려면 힘듦

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: "hi",
    author: null, //Nullable은 null도 지정을 할 수 있게됨
  };
}
