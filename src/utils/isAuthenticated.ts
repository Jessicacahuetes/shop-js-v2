import { cookies } from "next/headers";

const isAuthenticated = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  console.log(token);
  if (!token) {
    return false;
  } else {
    return true;
  }
};

export default isAuthenticated;
