import { useBooks } from '../hooks/useBooks';

export default function Home() {
  const [result] = useBooks();
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oops! Something went wrong.</p>;

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {data.books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
