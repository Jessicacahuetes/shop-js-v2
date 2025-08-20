"use server";

import { cookies } from "next/headers";

const signup = async (
  _currentState: { error: string | null; success: boolean },
  formData: FormData
) => {
  try {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!username || !email || !password) {
      return { error: "All fields are required", success: false };
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    if (!res.ok) {
      if (res.status === 409)
        return { error: "Email already exists", success: false };
      return {
        error: "An error has occurred while registration",
        success: false,
      };
    }

    const data = await res.json();

    const cookieStore = await cookies();
    cookieStore.set("token", data.token, {
      expires: Date.now() + 1000 * 60 * 60 * 24 * 14,
    });

    return { error: null, success: true };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred", success: false };
  }
};

export default signup;
