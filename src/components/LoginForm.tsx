// components/LoginForm.tsx
import React, { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // ログイン処理をここで実行
  };

  return (
    <div className="flex flex-col items-center pt-12 bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-8">ログイン</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded py-2 px-3 text-sm focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm mb-1">
              パスワード
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded py-2 px-3 text-sm focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            ログイン
          </button>
        </form>
        {/* Googleログインボタンの実装 */}
        <button className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded mt-6 hover:bg-red-600 focus:outline-none focus:bg-red-600">
          Googleアカウントでログイン
        </button>
        <p className="mt-4">
          アカウントをお持ちでない方は{" "}
          <Link href="/signup">
            <span className="text-blue-500 cursor-pointer">こちら</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
