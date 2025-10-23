import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const getStoreBook = () => {
  const storedBook = localStorage.getItem("readList");
  if (storedBook) {
    const storedBookData = JSON.parse(storedBook);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStored = (id) => {
  const storedBookData = getStoreBook();
  if (storedBookData.includes(id)) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: "Books Already Added Marked As Read! Please go to Listed Books.",
      showCancelButton: true,
      confirmButtonText: "Go to Listed Books",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/listed-books");
      }
    });
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
    MySwal.fire({
      title: "Good job!",
      text: "Mark as Read Added.  Please go to Listed Books.",
      icon: "success",
    });
  }
};

const removeFromStored = (id) => {
  const storedBookData = getStoreBook();
    const newList = storedBookData.filter(bookId => bookId !== id);
    localStorage.setItem("readList", JSON.stringify(newList));
    MySwal.fire({
      title: "Success!",
      text: "Book is removed from the Read list.",
      icon: "success",
    });
};


export { addToStored, getStoreBook, removeFromStored };
