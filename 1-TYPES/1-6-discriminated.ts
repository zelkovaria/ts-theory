{
  type SuccessState = {
    result: "success";
    response: { body: string };
  };
  type FalseState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FalseState;

  //printLoginSTate(state: LoginState)
  //success -> '성공' 출력
  //fail -> '실패' 출력
  function printLoginState3(state: LoginState) {
    // state.result -> success or fail임을 ts는 알기 때문에 조건으로 가능
    if (state.result === "success") {
      console.log(`성공 ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  }
}
