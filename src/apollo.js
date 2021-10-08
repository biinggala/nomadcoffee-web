import { makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);
//reactive variables 를 만드는 방법. state 대신 사용할 수 있다. makeVar 안에 기본값을 넣어주면 끝
