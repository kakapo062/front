import { useRouter } from "next/router";
import Head from "next/head";

const Settings = () => {
  const router = useRouter();

  const handleLogout = () => {
    // ログアウト処理をここに実装。
    // 例: CookieやLocalStorageから認証情報を削除し、ユーザーをログアウトさせる。

    // ログアウト後、ホームページまたはログインページにリダイレクト
    router.push("/");
  };

  return (
    <>
      <div className="container mx-auto max-w-screen-md px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">設定</h1>
        <div className="mt-4">
          <button
            className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition-all duration-200"
            onClick={handleLogout}
          >
            ログアウト
          </button>
        </div>
      </div>
    </>
  );
};

export default Settings;
