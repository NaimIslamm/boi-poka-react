import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, image, author, tags, category } = book;
  return (
    <div>
      <Link to={`book/${bookId}`}>
        <div class="card outline border bg-white-200 w-96 shadow-sm p-4 h-full">
          <figure className="p-[32px] bg-slate-200">
            <img
              src={image}
              className="max-w-[134px] max-h-[166px] object-fit"
              alt="Shoes"
            />
          </figure>
          <div>
            {tags.map((tag, index) => (
              <button
                className="bg-green-100 text-[#23BE0A] py-2 px-2 rounded-xl mx-2 my-4"
                tag={tag}
                key={index}
              >
                {tag}
              </button>
            ))}
          </div>
          <div class="card-body p-0">
            <h2 class="card-title text-[black] md:text-[24px]">{bookName}</h2>
            <p className="text-[16px] text-[black]">By: {author}</p>
            <div className="border-t-2 border-dashed my-3 text-[black]"></div>
            <div class="card-actions justify-between">
              <div class="badge">{category}</div>
              <div class="rating rating-lg rating-half">
                <input type="radio" name="rating-11" class="rating-hidden" />
                <input
                  type="radio"
                  name="rating-11"
                  class="mask mask-star-2 mask-half-1 bg-green-500"
                  aria-label="0.5 star"
                />
                <input
                  type="radio"
                  name="rating-11"
                  class="mask mask-star-2 mask-half-2 bg-green-500"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-11"
                  class="mask mask-star-2 mask-half-1 bg-green-500"
                  aria-label="1.5 star"
                  checked="checked"
                />
                <input
                  type="radio"
                  name="rating-11"
                  class="mask mask-star-2 mask-half-2 bg-green-500"
                  aria-label="2 star"
                />
                <input
                  type="radio"
                  name="rating-11"
                  class="mask mask-star-2 mask-half-1 bg-green-500"
                  aria-label="2.5 star"
                />
                <input
                  type="radio"
                  name="rating-11"
                  class="mask mask-star-2 mask-half-2 bg-green-500"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-11"
                  class="mask mask-star-2 mask-half-1 bg-green-500"
                  aria-label="3.5 star"
                />
                <input
                  type="radio"
                  name="rating-11"
                  class="mask mask-star-2 mask-half-2 bg-green-500"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-11"
                  class="mask mask-star-2 mask-half-1 bg-green-500"
                  aria-label="4.5 star"
                />
                <input
                  type="radio"
                  name="rating-11"
                  class="mask mask-star-2 mask-half-2 bg-green-500"
                  aria-label="5 star"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
