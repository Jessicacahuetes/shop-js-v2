"use server";

import { cookies } from "next/headers";

const login = async (
  _currentState: { error: string | null; success: boolean },
  formData: FormData
) => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return { error: "All fields are required", success: false };
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      if (res.status === 401)
        return { error: "Wrong email or password", success: false };
      return {
        error: "An error has occurred while logging in",
        success: false,
      };
    }

    const data = await res.json();

    const cookieStore = await cookies();
    cookieStore.set("token", data.token, {
      expires: Date.now() + 1000 * 60 * 60 * 24 * 14,
    });

    return { error: null, success: true };
  } catch (err) {
    console.error(err);
    return { error: "An error occurred", success: false };
  }
};

export default login;
