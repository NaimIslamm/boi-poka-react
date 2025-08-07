// this is for read-list

import { toast } from "react-toastify";

// kothay add korbo er jnno function lagbe----

export const getStoredReadList = () => {
  // read-list er mddhe add korbo toh read-list ase naki seta aage check korte hbe---
  const storeListStorage = localStorage.getItem("read-list");
  if (storeListStorage) {
    const storedList = JSON.parse(storeListStorage);
    return storedList;
  } else {
    return [];
  }
};

// r add korar jnno function lagbe----------
export const addToStoreReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    // id ta already ase tai add krbona
    console.log(id);
  } else {
    // id ta nei tai add krbo
    storedList.push(id);
    // storedList- er mddhe jei id thakbe seta string akare rakhte hbe...local storage er nature
    const storeListIdStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storeListIdStr);
    toast("added to read list");
  }
};

// this is for read-list

// this is for wish list
export const getStoredWishList = () => {
  const storedListStorage = localStorage.getItem("wish-list");
  if (storedListStorage) {
    const storedList = JSON.parse(storedListStorage);
    return storedList;
  } else {
    return [];
  }
};

export const addtoStoreWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    // no need to add
    console.log(id, "no need to add");
  } else {
    // need to add
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
    toast("added to wish list");
  }
};

// this is for wish list
