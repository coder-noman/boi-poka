import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router";
import { addToStored } from "../../utility/addToDb";
import useBooksData from "../../Hooks/useBooks";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();

  const { books, loading } = useBooksData();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  const singleBook = books.find((book) => book.bookId === parseInt(id));
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;

  const handleMarkedAsRead = (id) => {
    addToStored(id);
  };

  return (
    <>
      <div className="flex md:flex-row flex-col gap-5 my-5 w-10/12 mx-auto ">
        <div
          className="flex md:w-1/2 items-center justify-center rounded-xl md:h-[800px] h-[400px]"
          style={{ backgroundColor: "#F3F3F3" }}
        >
          <img
            className="transition-transform duration-300 hover:rotate-0 rotate-12 shadow-xl/30 md:w-[280px] w-[200px]"
            src={image}
            alt="Shoes"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="card-title text-3xl">{bookName}</h2>
          <p className="text-base font-semibold">By: {author} </p>
          <hr className="border-t border-dashed  border-gray-400 my-4" />
          <p className="text-base font-semibold">{category}</p>
          <hr className="border-t border-dashed  border-gray-400 my-4" />
          <p>
            <span className="text-base font-semibold">Review :</span>
            {review}
          </p>
          <br />
          <p>
            <span className="text-base font-semibold">Tag </span>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-sm font-medium text-green-700 inset-ring inset-ring-green-600/20 ms-3"
              >
                {tag}
              </span>
            ))}
          </p>
          <hr className="border-t border-dashed  border-gray-400 my-4" />
          <div className="flex">
            <div className="flex-4/12">
              <p className="mb-2">Number of Pages:</p>
              <p className="mb-2">Publisher:</p>
              <p className="mb-2">Year of Publishing:</p>
              <p className="mb-2">Rating:</p>
            </div>
            <div className="flex-8/12 font-bold">
              <p className="mb-2">{totalPages}</p>
              <p className="mb-2">{publisher}</p>
              <p className="mb-2">{yearOfPublishing}</p>
              <div className="flex items-center gap-2 mb-6">
                <p>{rating}</p>
                <FaStar className="text-yellow-500" />
              </div>
            </div>
          </div>
          <button
            onClick={() => handleMarkedAsRead(bookId)}
            className="btn me-3"
          >
            Marked As Read
          </button>
          <button className="btn btn-info text-white">Add To Wishlist</button>
        </div>
      </div>
      <div className="flex justify-center mb-5">
        <Link to="/"><button className="btn btn-accent text-white">Back To Home</button></Link>
      </div>
    </>
  );
};

export default BookDetails;
