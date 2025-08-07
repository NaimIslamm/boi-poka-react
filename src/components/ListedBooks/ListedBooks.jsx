import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../Utility/addToDB";
import Book from "../Book/Book";

const ListedBooks = () => {
  // filter kore j gula paici oigula show korar jnno eta state dite hbe

  const [readListBook, setReadListBook] = useState([]);
  const [wishListBook, setwishListBook] = useState([]);
  console.log(readListBook, wishListBook, "total");
  const allBooks = useLoaderData();
  // console.log(allBooks);

  // read-list a jei data ase oita load korbo use effect diye--
  useEffect(() => {
    // this is for read-list----------------------
    const storedReadList = getStoredReadList();

    // 2 ta data ase, but read-list ta string akare ase [console.log(storedReadList)]; oita convert kore fele seta filter kore show korte hbe, loop/map chalate hbe karon seta array mddhe ase---

    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    // console.log(storedReadListInt);
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    // fielter kore data gula ekta state er mddhe set kore se gula use korbo|

    setReadListBook(readBookList);
    // this is for read-list----------------------

    // this is for wish-list-----------------------------------------------
    const storedWishList = getStoredWishList();
    // console.log(storedWishList);
    // wish-list array mddhe string akare ase parseInt kore nite hbe sonkha
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    // console.log(storedWishListInt);
    // eibar loop/filter chaliye selected data gula niye nebo

    const wishBookList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );
    setwishListBook(wishBookList);
    // this is for wish-list-------------------------------------------------
  }, []);
  return (
    <Tabs>
      <TabList className="text-black text-3xl my-10">
        <Tab>Read List</Tab>
        <Tab>Wish List</Tab>
      </TabList>

      <TabPanel className="text-black">
        <h2 className="text-center text-2xl">
          Books i Read: {readListBook.length}
        </h2>
        <h2 className="grid md:grid-cols-3 lg:grid-cols-3 gap-5 my-10">
          {readListBook.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </h2>
      </TabPanel>
      <TabPanel className="text-black">
        <h2 className="text-center text-2xl">
          Books i wish to list:{wishListBook.length}
        </h2>
        <h2 className="grid md:grid-cols-3 lg:grid-cols-3 gap-5 my-10">
          {wishListBook.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </h2>
      </TabPanel>
    </Tabs>
  );
};

export default ListedBooks;
