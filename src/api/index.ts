import axios from "axios";

export const api = axios.create({
  baseURL: "https://tioon.store",
});


type paramProps = {
// param
}


// export const postArea = async ({ id, pw }: paramProps) => {
//   const res = await api.post("/api/v1/route", { id, pw });
//   return res;
// };