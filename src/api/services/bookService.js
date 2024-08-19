const bookModel = require("../models/bookModel");

const getAllBookRequest = async () => {
  return await bookModel.getAllBookRequest();
};

const postBookRequest = async (book) => {
  return await bookModel.postBookRequest(book);
};

module.exports = { getAllBookRequest, postBookRequest };
