import React from "react";
import { useState } from "react";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = () => {
    // 検索処理をここに書く
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
          本を検索する
        </h1>
        <div className="rounded-md shadow-sm">
          <div>
            <input
              type="text"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="本のタイトル"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <button
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:text-emerald-700 transition-all duration-200 focus:outline-none focus:ring-emerald-600"
            onClick={handleSearch}
          >
            検索
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
