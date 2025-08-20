"use client";

import login from "@/actions/login";
import { useActionState } from "react";

const LoginForm = () => {
  const [formState, formAction, isPending] = useActionState(login, {
    error: null,
    success: false,
  });

  return (
    <form
      action={formAction}
      className="flex flex-col w-full sm:w-sm mx-auto gap-4"
    >
      <input
        type="email"
        name="email"
        placeholder="email"
        className="border p-2"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="border p-2"
      />
      <button
        type="submit"
        disabled={isPending}
        className="py-2 px-4 hover:bg-gray-500/30 disabled:opacity-50 border uppercase"
      >
        Login
      </button>
      {formState.error && (
        <p className="text-red-500 text-sm">{formState.error}</p>
      )}
      {formState.success && (
        <p className="text-green-600 text-sm text-center">
          Logged in successfully!
        </p>
      )}
    </form>
  );
};
export default LoginForm;
