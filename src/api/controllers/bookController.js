const {
  getAllBookRequest,
  postBookRequest,
} = require("../services/bookService");

const getRequests = async (req, res) => {
  try {
    const books = await getAllBookRequest();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

const postRequest = async (req, res) => {
  try {
    const bookRequestData = req.body;
    await postBookRequest(bookRequestData);
    res.status(201).json({ message: "Book request added successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add book request" });
  }
};

module.exports = { getRequests, postRequest };
