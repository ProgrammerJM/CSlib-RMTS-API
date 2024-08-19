const bookModel = require("../models/bookModel");

const getAllBookRequestService = async () => {
  return await bookModel.getAllBookRequest();
};

const postBookRequestService = async (book) => {
  return await bookModel.postBookRequest(book);
};

module.exports = { getAllBookRequestService, postBookRequestService };
