// pages/bookshelf.tsx
import React from 'react';
import { BookShelf } from '../components/BookShelf';
import { useBooks } from "../hooks/useBooks";

const sampleBooks = [
  { id: '1', title: '嫌われる勇気', coverImage: '/images/cover1.jpg' },
  { id: '2', title: '人を動かす', coverImage: '/images/cover2.jpg' },
  { id: '3', title: '人を動かす', coverImage: '/images/cover2.jpg' },
  { id: '4', title: '人を動かす', coverImage: '/images/cover2.jpg' },
  { id: '5', title: '人を動かす', coverImage: '/images/cover2.jpg' },
  { id: '6', title: '人を動かす', coverImage: '/images/cover2.jpg' },
  { id: '7', title: '人を動かす', coverImage: '/images/cover2.jpg' },
  { id: '8', title: '人を動かす', coverImage: '/images/cover2.jpg' },
];

const BookShelfPage: React.FC = () => {
  const [result] = useBooks();
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oops! Something went wrong.</p>;

  // return <BookShelf books={data.books} />;
  return <BookShelf books={sampleBooks} />;
};
export default BookShelfPage;
