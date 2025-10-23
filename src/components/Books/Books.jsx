import Book from "../Book/Book";
import useBooksData from "../../Hooks/useBooks";

const Books = () => {
  const { books, loading } = useBooksData();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-5 ">Books</h1>

      <div className="px-4 py-6 flex justify-center mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
