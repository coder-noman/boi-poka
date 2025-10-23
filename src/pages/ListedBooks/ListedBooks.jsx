import { FaSortAmountDown } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from "../../components/ReadBooks/ReadBooks"
import WishlistBooks from "../../components/WishlistBooks/WishlistBooks"

const ListedBooks = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold bg-[#F3F3F3] rounded-lg py-5 my-7">
        Books
      </h1>
      <div className="flex justify-center mb-10">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-success m-1 text-white text-lg"
          >
            <a>Sort By</a>
            <FaSortAmountDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-20">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadBooks></ReadBooks>
          </TabPanel>
          <TabPanel>
            <WishlistBooks></WishlistBooks>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
