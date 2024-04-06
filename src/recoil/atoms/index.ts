import { atom } from "recoil";

export const jwtTokenState = atom({
  key: "jwtTokenState",
  default: localStorage.getItem('jwtToken') ? true : false,
});

export const nameState = atom({
  key: "nameState",
  default:""
});