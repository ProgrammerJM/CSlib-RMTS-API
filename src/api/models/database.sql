CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar,
  "role" varchar,
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

CREATE TABLE "request_books" (
  "request_id" integer,
  "book_id" integer
);

CREATE TABLE "quotations" (
  "id" SERIAL PRIMARY KEY,
  "admin_id" integer,
  "book_id" integer,
  "isbn" varchar,
  "price" numeric(10,2)
);

ALTER TABLE "request" ADD FOREIGN KEY ("admin_id") REFERENCES "users" ("id");

ALTER TABLE "request" ADD FOREIGN KEY ("requestor_id") REFERENCES "users" ("id");

ALTER TABLE "request_books" ADD FOREIGN KEY ("request_id") REFERENCES "request" ("id");

ALTER TABLE "request_books" ADD FOREIGN KEY ("book_id") REFERENCES "books" ("id");

ALTER TABLE "quotations" ADD FOREIGN KEY ("admin_id") REFERENCES "users" ("id");

ALTER TABLE "quotations" ADD FOREIGN KEY ("book_id") REFERENCES "books" ("id");

ALTER TABLE "books" ADD FOREIGN KEY ("author_id") REFERENCES "author" ("id");