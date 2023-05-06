// components/BookShelf.tsx
import React from "react";
import Image from "next/image";

interface Book {
  id: string;
  title: string;
  coverImage: string;
}

interface BookShelfProps {
  books: Book[];
}

export const BookShelf: React.FC<BookShelfProps> = ({ books }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-center py-6">本棚</h1>
      <ul className="flex flex-wrap p-2 pb-32">
        {books.map((book) => (
          <li
            key={book.id}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4"
          >
            <div className="rounded-lg shadow-md bg-white hover:bg-gray-200 transition-all duration-200 cursor-pointer">
              <Image
                src={book.coverImage}
                alt={book.title}
                className="object-cover object-center rounded-lg"
                width={300}
                height={400}
              />
              {/* <p className="text-lg font-semibold">{book.title}</p> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
