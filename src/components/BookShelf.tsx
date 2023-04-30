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
      <h1 className="text-3xl font-semibold text-center py-6">My 本棚</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {books.map((book) => (
          <li
            key={book.id}
            className="rounded-lg shadow-md p-4 bg-white hover:bg-gray-200 transition-all duration-200 cursor-pointer"
          >
            <Image
              src={book.coverImage}
              alt={book.title}
              className="object-cover object-center"
              width={150}
              height={200}
            />
            <p className="text-lg font-semibold">{book.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
