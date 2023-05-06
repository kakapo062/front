import React from "react";
import Link from "next/link";

const SignupForm = () => {
  return (
    <div className="bg-gray-100 flex flex-col pt-16 items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">新規登録</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              メールアドレス
            </label>
            <input
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              パスワード
            </label>
            <input
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="password"
              required
            />
          </div>
          <button
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            type="submit"
          >
            新規登録
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600">アカウントをお持ちの方は </span>
          <Link href="/login">
            <span className="text-blue-500 cursor-pointer">ログイン</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
