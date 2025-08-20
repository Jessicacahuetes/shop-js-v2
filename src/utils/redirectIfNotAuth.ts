import { redirect } from "next/navigation";
import isAuthenticated from "./isAuthenticated";

const redirectIfNotAuth = async () => {
  const auth = await isAuthenticated();

  if (!auth) {
    redirect("/user/login");
  }
};
export default redirectIfNotAuth;
