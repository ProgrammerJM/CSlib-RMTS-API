CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar(255) NOT NULL,
  "password" varchar(255) NOT NULL,
  "role" varchar(100) NOT NULL,
  "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE "books" (
  "id" SERIAL PRIMARY KEY,
  "title" varchar,
  "edition" varchar,
  "author_id" integer
);

CREATE TABLE "author" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "request" (
  "id" SERIAL PRIMARY KEY,
  "admin_id" integer,
  "requestor_id" integer,
  "department" varchar,
  "date_processed" date,
  "location" varchar
);

CREATE TABLE "requests" {
  "id" SERIAL PRIMARY KEY,
  "status" varchar(100) NOT NULL,
  "date_received" date NOT NULL,
  "book_request_sources" text NOT NULL,
  "course_title_faculty_request" text NOT NULL,
  "priority_no" int,
  "item_description" text NOT NULL,
  "remarks" text,
  "on_shelf_date" date,
  "suplier" text,
  "accession_no" varchar(50),
  "sales_invoice_no" varchar(50),
  "actual_cost" numeric(10, 2),
  "updated_book_fund" boolean DEFAULT FALSE,
  "updated_by" varchar(255),
  "last_remarks" text,
  "user_id" text REFERENCES users(id)
}

CREATE TABLE "quotations" (
  "id" SERIAL PRIMARY KEY,
  "admin_id" integer,
  "book_id" integer,
  "isbn" varchar,
  "price" numeric(10,2)
);

ALTER TABLE "request" ADD user_id INT, ADD FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE "quotations" ADD FOREIGN KEY ("admin_id") REFERENCES "users" ("id");

ALTER TABLE "quotations" ADD FOREIGN KEY ("book_id") REFERENCES "books" ("id");

ALTER TABLE "books" ADD FOREIGN KEY ("author_id") REFERENCES "author" ("id");