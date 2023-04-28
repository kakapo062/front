// components/BookShelf.tsx
import React from 'react';
import { useBooks } from "../hooks/useBooks";

interface Book {
  id: string;
  title: string;
  coverImage: string;
}

interface BookShelfProps {
  books: Book[];
}

export const BookShelf: React.FC<BookShelfProps> = ({ books }) => {
  const [result] = useBooks();
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oops! Something went wrong.</p>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-4">My Bookshelf</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.books.map((book) => (
          <div key={book.id} className="flex flex-col">
            {/* <img src={book.coverImage} alt={book.title} className="w-full h-48 object-cover rounded-md" /> */}
            <p className="mt-2 text-sm text-center">{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
