CREATE TABLE "users" (
  "user_uid" UUID PRIMARY KEY,
  "username" varchar(255) NOT NULL,
  "password" varchar(255) NOT NULL,
  "role" varchar(100) NOT NULL,
  "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE "requests" (
  "request_uid" PRIMARY KEY,
  "status" varchar(100) NOT NULL,
  "date_received" date NOT NULL,
  "book_request_sources" text NOT NULL,
  "course_title_faculty_request" text NOT NULL,
  "priority_no" int,
  "item_description" text NOT NULL,
  "remarks" text,
  "on_shelf_date" date,
  "supplier" text,
  "accession_no" varchar(50),
  "sales_invoice_no" varchar(50),
  "actual_cost" numeric(10,2),
  "updated_book_fund" boolean DEFAULT false,
  "updated_by" varchar(255),
  "last_remarks" text,
);
