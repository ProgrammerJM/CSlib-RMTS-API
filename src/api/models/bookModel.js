const pool = require("../../config/db");

const getAllBookRequest = async () => {
  const result = await pool.query("SELECT * FROM requests");
  return result.rows;
};

const postBookRequest = async (bookRequestData) => {
  const result = await pool.query(
    "INSERT INTO requests (status, date_received, book_request_sources, course_title_faculty_request, priority_no, item_description, remarks, on_shelf_date, supplier, accession_no,sales_invoice_no, actual_cost, updated_book_fund, updated_by, last_remarks) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)",
    [
      bookRequestData.status,
      bookRequestData.date_received,
      bookRequestData.book_request_sources,
      bookRequestData.course_title_faculty_request,
      bookRequestData.priority_no,
      bookRequestData.item_description,
      bookRequestData.remarks,
      bookRequestData.on_shelf_date,
      bookRequestData.supplier,
      bookRequestData.accession_no,
      bookRequestData.sales_invoice_no,
      bookRequestData.actual_cost,
      bookRequestData.updated_book_fund,
      bookRequestData.updated_by,
      bookRequestData.last_remarks,
    ]
  );
  return result;
};

module.exports = { getAllBookRequest, postBookRequest };
