// pages/bookshelf.tsx
import React from 'react';
import { BookShelf } from '../components/BookShelf';

// 仮のデータです。実際にはデータベースから取得する必要があります。
const sampleBooks = [
  { id: '1', title: 'Book 1', coverImage: '/path/to/cover1.jpg' },
  { id: '2', title: 'Book 2', coverImage: '/path/to/cover2.jpg' },
];

const BookShelfPage: React.FC = () => {
  return <BookShelf books={sampleBooks} />;
};

export default BookShelfPage;
