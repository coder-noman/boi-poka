import book from "../../assets/banner-book.png";
const Banner = () => {
  return (
    <div style={{ backgroundColor: '#F3F3F3',borderRadius:"24px"}} className="hero md:min-h-screen py-5 my-5">
      <div className="hero-content flex-col lg:flex-row gap-8 md:gap-0">
        <div className="flex-1">
          <img className="w-8/12 lg:mx-14 ms-9" src={book} />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <button className="btn btn-success text-white mt-16">View the list</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
