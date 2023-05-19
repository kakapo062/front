import React from "react";
import { signIn } from "next-auth/react";

const LoginForm: React.FC = () => {
  const signInWithGoogle = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="flex flex-col items-center pt-16">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold">ログイン</h1>
        <button
          className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded mt-6 hover:bg-red-600 focus:outline-none focus:bg-red-600"
          onClick={signInWithGoogle}
        >
          Googleアカウントでログイン
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
