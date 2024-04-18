//pick과 반대로 원하는 것만 제외해서 명세할 수 있음
{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // Omit은 전달받은 애들을 제외한 것들을 사용할 수 있음
  type VideoMetadata = Omit<Video, "url" | "data">;

  function getVideo2(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  function getVideoMetadata2(id: string): VideoMetadata {
    return {
      id,
      title: "title",
    };
  }
}
