// pages/bookshelf.tsx
import React from 'react';
import { BookShelf } from '../components/BookShelf';
import { useBooks } from "../hooks/useBooks";

const sampleBooks = [
  { id: '1', title: 'リーダブルコード', coverImage: '/images/test.jpeg' },
  { id: '2', title: 'リーダブルコード', coverImage: '/images/test.jpeg' },
  { id: '3', title: 'リーダブルコード', coverImage: '/images/test.jpeg' },
  { id: '4', title: 'リーダブルコード', coverImage: '/images/test.jpeg' },
];

const BookShelfPage: React.FC = () => {
  // const [result] = useBooks();
  // const { data, fetching, error } = result;

  // if (fetching) return <p>Loading...</p>;
  // if (error) return <p>Oops! Something went wrong.</p>;

  // return <BookShelf books={data.books} />;
  return <BookShelf books={sampleBooks} />;
};
export default BookShelfPage;
