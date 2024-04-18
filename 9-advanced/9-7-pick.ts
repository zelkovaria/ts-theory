{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  //Video라는 기존의 타입에서 id, title만 이용한 Type을 골라 만들 수 있음
  type VideoMetadata = Pick<Video, "id" | "title">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: "title",
    };
  }
}
