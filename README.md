# Full-Stack ePortfolio Workshop

This is a full-stack application featuring a **Next.js** frontend, an **Express** backend, and a **MySQL** database.

##Getting Started

### 1. Prerequisites
* **Node.js** installed.
* **MySQL Server** running locally.
* A `.env.details` file in the root directory with your database credentials.

### 2. Database Setup
Before running the application, initialize the database using the provided SQL script:
1. Open MySQL Workbench or your terminal.
2. Run the code found in `post.sql` to create the `myDB` database and the `posts` table.

### 3. Installation/Running the Website
Install the dependencies for the project:
```bash
npm install
run posts.sql on command line or MySQL Workbench
npm run dev
