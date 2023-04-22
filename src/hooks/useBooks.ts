import { useQuery } from 'urql';

const BOOKS_QUERY = `
  query {
    books {
      id
      title
    }
  }
`;

export function useBooks() {
  return useQuery({ query: BOOKS_QUERY });
}
