import { Route, Routes } from "react-router";
import Root from "../pages/Root/Root";
import Errorpage from "../pages/Errorpage/Errorpage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ListedBooks from "../pages/ListedBooks/ListedBooks";

const Routess = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />}></Route>
          <Route path="/about/:id" element={<About />}></Route>
          <Route path="/listedbooks" element={<ListedBooks />}></Route>
        </Route>
        <Route path="*" element={<Errorpage />}></Route>
      </Routes>
    </>
  );
};

export default Routess;
