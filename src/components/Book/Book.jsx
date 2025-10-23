import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const {bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link to={`/about/${bookId}`}>
      <div className="card bg-base-100 w-[365px] shadow-sm border-gray-100 border-2 h-[480px]">
        <div className="px-4 pt-4 ">
          <figure
            style={{ backgroundColor: "#F3F3F3" }}
            className="h-56 rounded-xl"
          >
            <img
              className="transition-transform duration-300 hover:rotate-0 rotate-12 shadow-xl/30 "
              src={image}
              alt="Shoes"
              width={"100px"}
            />
          </figure>
        </div>
        <div className="card-body">
          <div className="card-actions">
            {tags.map((tag,index) => (
              <span key={index}  className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-sm font-medium text-green-700 inset-ring inset-ring-green-600/20">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="card-title text-xl">{bookName}</h2>
          <p className="text-base">By: {author} </p>
          <hr className="border-t border-dashed  border-gray-400 my-4" />
          <div className="flex text-base">
            <p>{category}</p>
            <div className="flex items-center gap-2">
              <p>{rating}</p>
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
