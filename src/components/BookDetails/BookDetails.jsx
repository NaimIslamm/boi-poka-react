import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList, addtoStoreWishList } from "../Utility/addToDB";

const BookDetails = () => {
  const { bookId } = useParams();
  // fetch korci seta load korlam useLoaderData() diye--
  const datas = useLoaderData();
  const id = parseInt(bookId);
  const book = datas.find((data) => data.bookId === id);
  console.log(book, "book");
  // this is for read-list
  const handleMarkAsRead = (id) => {
    addToStoreReadList(id);
  };

  //   this is for wish-list
  const handleMarkAsWish = (id) => {
    addtoStoreWishList(id);
    console.log("hi", id);
  };
  return (
    <div className="my-6 flex flex-col gap-4 w-fit shadow-md p-4">
      <h2 className="text-[black]">BookID: {bookId}</h2>
      <img className="max-w-[144px]" src={book.image} alt="" />
      <h2 className=" text-3xl text-[black]">{book.bookName}</h2>
      <div className="flex gap-2">
        <button
          onClick={() => handleMarkAsRead(bookId)}
          className="outline text-[black] p-3"
        >
          Read List
        </button>
        <button
          onClick={() => handleMarkAsWish(bookId)}
          className=" text-[white] bg-[#50B1C9] p-3"
        >
          Wish List
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
