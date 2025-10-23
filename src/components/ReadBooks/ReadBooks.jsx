import React, { useEffect, useState } from "react";
import useBooks from "../../Hooks/useBooks";
import { getStoreBook, removeFromStored } from "../../utility/addToDb";
import ReadBook from "../ReadBook/ReadBook";
import { useNavigate } from "react-router";
import dataNotAvailable from "../../assets/data-not-available.jpeg";

const ReadBooks = () => {
  const { books, loading } = useBooks();
  const [readBooks, setReadBooks] = useState([]);
  const [updateKey, setUpdateKey] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBook = getStoreBook();
    const readallBooks = books.filter((book) =>
      storedBook.includes(book.bookId)
    );
    setReadBooks(readallBooks);
  }, [books, updateKey]);

  const Rerender = () => {
    setUpdateKey((prev) => prev + 1);
  };

  const handleMarkedUnread = (bookId) => {
    removeFromStored(bookId, navigate);
    Rerender();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  const length = readBooks.length;
  console.log(length);

  return (
    <div className="mt-10">
      {length > 0 ? (
        readBooks.map((readBook) => (
          <ReadBook
            key={readBook.bookId}
            readBook={readBook}
            handleMarkedUnread={handleMarkedUnread}
          />
        ))
      ) : (
        <div className=" h-[300px] flex items-center justify-center">
          <img className="w-[500px]" src={dataNotAvailable} alt="" />
        </div>
      )}
    </div>
  );
};

export default ReadBooks;
