interface Either<L, R> {
  //L과 R은 원하는대로 의미가 들어가도록 간략하게 작성
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); //4
either.right(); //5
const best = new SimpleEither(4, "hello"); //어떤 타입이든 쓰는 사람이 결정이 가능해짐
