"use client";

import signup from "@/actions/signup";
import { useActionState } from "react";

const SignupForm = () => {
  const [formState, formAction, isPending] = useActionState(signup, {
    error: null,
    success: false,
  });

  return (
    <form
      action={formAction}
      className="flex flex-col w-full sm:w-sm mx-auto gap-4"
    >
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="border p-2"
      />
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
        Register
      </button>
      {formState.error && (
        <p className="text-red-500 text-center">{formState.error}</p>
      )}
      {formState.success && (
        <p className="text-green-700 text-center">
          Account created successfully!
        </p>
      )}
    </form>
  );
};
export default SignupForm;
