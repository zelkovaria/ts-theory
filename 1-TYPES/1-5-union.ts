{
  /**
   * Union Types: OR
   * 특정 값만 지정하고 싶을 때
   */
  type Direction = "right" | "left" | "up" | "down";
  function move1_5(direction: Direction) {
    console.log(direction);
  }

  move("down");
  move("left");
  move("right");
  move("up"); // Direction의 값이 아닌 것은 올 수 없음

  type TitleSize = 3 | 6 | 9;
  const title: TitleSize = 3; //3, 6, 9중 하나니까 가능
  //const titl2: TitleSize = 30;
  //30이라는 값은 TitleSize에 없으니 불가능

  //ex. function: login -> success, fail
  type SuccessState = {
    response: { body: string };
  };
  type FalseState = {
    reason: string;
  };
  type LoginState = SuccessState | FalseState;

  function login(): LoginState {
    return {
      response: {
        body: "hi",
      },
    };
  }

  //printLoginSTate(state: LoginState)
  //success -> '성공' 출력
  //fail -> '실패' 출력
  const printLoginState = (state: LoginState) => {
    if ("response" in state) {
      //response라는 키가 state object 안에 있는 경우
      console.log(`성공 ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  };
  //함수 형태로 작성해보기
  function printLoginState2(state: LoginState) {
    if ("response" in state) {
      console.log(`성공 ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  }

  //이런건 어떠려나
  type ResponseState = {
    response: { body: string };
    reason?: string;
  };

  function login2(state: string): ResponseState {
    if (state) {
      return { response: { body: "hi" } };
    } else {
      return { response: { body: "hi" }, reason: "이유" };
    }
  }

  function login3(): LoginState {
    const success = someConditionCheck();
    if (success) {
      return {
        response: {
          body: "hi",
        },
      };
    } else {
      return {
        reason: "Login failed reason",
      };
    }
  }
  function someConditionCheck(): boolean {
    return Math.random() > 0.5;
  }
}
