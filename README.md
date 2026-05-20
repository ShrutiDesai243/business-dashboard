# 📊 Business Listings Dashboard

## 🚀 Overview

This project is a full-stack data pipeline and dashboard that:

* Scrapes business listing data from multiple sources
* Cleans and processes the data
* Stores it in a MySQL database
* Displays insights via an interactive React dashboard

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* Chart.js / Recharts

**Backend:**

* Node.js
* Express.js

**Database:**

* MySQL

**Data Processing:**

* Excel (initial inspection & basic cleaning)
* SQL (data validation, deduplication, structuring)
* Python (Pandas – combining multiple CSV files)

---

## ⚙️ Features

* 📌 Scraped business listings data from multiple sources
* 🧹 Data cleaning and preprocessing
* 🌆 Filtering by city, category and source
* 📊 Interactive charts and metrics:

  * Total Listings
  * Listings by City
  * Listings by Category
  * Listings by Source
* 🔗 REST API integration between frontend and backend

---

## 📂 Project Structure

```
project-root/
│
├── dashboard/        # React dashboard
├── backend/         # Node.js APIs
├── database/
│   ├── business_db.sql
│   ├── raw_data.csv
│   └── cleaned_data.csv
│
└── README.md
```

---

## 🧠 Scraping Approach

* Multiple CSV files were generated from scraping different sources
* Combined using Python (Pandas)
* Removed duplicates and cleaned missing values
* Standardized fields like city and source

---

## 🔌 API Endpoints

* `/api/listings` → Get all listings
* `/api/total-listings` → Get total count
* `/api/by-city` → Aggregation by city
* `/api/by-source` → Aggregation by source

---

## 💻 Setup Instructions

### 1️⃣ Clone the Repository

```
git clone (https://github.com/ShrutiDesai243/business-dashboard)
cd project-root
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
node server.js
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

### 4️⃣ Database Setup

* Import `business_db.sql` into MySQL
* Update DB credentials in backend config if needed

---

## 📊 Data Files

* `raw_data.csv` → Original scraped data
* `cleaned_data.csv` → Processed dataset used in DB
* `business_db.sql` → Database dump

---

## ⚠️ Challenges Faced

* Handling multiple CSV files and merging them
* Data cleaning (missing values, duplicates)
* API integration issues (port mismatches)
* Debugging frontend-backend connectivity

---

## 🎥 Demo Video

A 3–5 minute demo explaining the project:

- Scraping approach
- API functionality
- Dashboard features

🔗 Video Link:[https://drive.google.com/file/d/1CimDqilFn6a1kwedd-1611u7mEtFyZNq/view?usp=sharing]

## ✅ Conclusion

This project demonstrates end-to-end data handling:
from scraping → cleaning → storage → visualization.

---
