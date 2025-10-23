import React from "react";
import { FaStar } from "react-icons/fa";

const ReadBook = ({ readBook, handleMarkedUnread}) => {
  const { bookId, bookName, author, image, rating, category, tags } = readBook;


  return (
    <div className=" bg-base-100 rounded-xl  shadow-lg mb-5 w-11/12 mx-auto">
      <div className="p-4 flex gap-6">
        <div
          className=" flex md:flex-3/12 flex-5/12 items-center justify-center rounded-xl md:h-[270px] h-[200px] "
          style={{ backgroundColor: "#F3F3F3" }}
        >
          <img
            className="transition-transform duration-300 hover:rotate-0 rotate-12 shadow-xl/30 md:w-[100px] w-[80px]"
            src={image}
            alt="Shoes"
          />
        </div>
        <div className="md:flex-9/12 flex-7/12">
          <h2 className="md:text-3xl text-xl font-semiboldbold">{bookName}</h2>
          <p className="md:text-base text-base md:my-3 my-2">By: {author} </p>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 md:text-sm font-medium text-green-700 inset-ring inset-ring-green-600/20 me-2 text-xs"
            >
              {tag}
            </span>
          ))}
          <hr className="border-t border-dashed  border-gray-400 my-4" />
          <p className="text-xs md:text-base">
            <span className="font-semibold  md:text-base text-xs">
              Category:
            </span>{" "}
            {category}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-xs  md:text-base">
              <span className="font-semibold  md:text-base text-xs">
                Rating:
              </span>{" "}
              {rating}
            </p>
            <FaStar className="text-yellow-500" />
          </div>
          <button
            onClick={() => handleMarkedUnread(bookId)}
            className="btn md:btn-sm btn-xs btn-error text-white my-3"
          >
            Marked as unread
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
