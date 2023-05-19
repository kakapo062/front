import React, { useState, useRef } from "react";
import axios from "axios";
import { debounce } from "lodash";
import Image from "next/image";

type Book = {
  volumeInfo: {
    title: string;
    imageLinks: {
      thumbnail: string;
    };
  };
};

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  const searchBooks = async (searchTerm: string) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: searchTerm,
            key: process.env.GOOGLE_API_KEY,
          },
        }
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  // debounceを使用して入力終了後すぐにAPIが叩かれないようにする
  const debouncedSearchBooks = useRef(debounce(searchBooks, 300)).current;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearchBooks(term);
  };
  return (
    <div className="bg-gray-100 flex items-center justify-center px-4 pt-36 pb-24 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
          本を検索する
        </h1>
        <div className="rounded-md shadow-sm">
          <div>
            <input
              type="text"
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="本のタイトル"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {books.map((book: Book, index: number) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded shadow-lg"
            >
              <div className="relative h-48 w-full">
                {book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.thumbnail ? (
                  <div className="h-full w-full">
                    <Image
                      className="object-contain h-full w-full"
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt={book.volumeInfo.title}
                      fill
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full w-full bg-gray-200">
                    <p className="text-gray-500 text-lg">No Image</p>
                  </div>
                )}
              </div>
              <div className="px-6 py-4">
                <div className="font-bold">{book.volumeInfo.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
