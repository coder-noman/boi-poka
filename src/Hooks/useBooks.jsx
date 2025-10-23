import { useEffect, useState } from "react";
import axios from "axios";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("../../public/booksData.json").then((res) => {
      setBooks(res.data);
      setLoading(false);
    });
  }, []);

  return { books, loading };
};

export default useBooks;
