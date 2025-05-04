 E-commerce Product Search App
Welcome to my full-stack e-commerce project
This app lets users browse and search for products, then view detailed information about them — built with Java (Spring Boot) on the backend and React on the frontend.

---

# What This Project Does

This project simulates a basic e-commerce experience:

- A **landing page** where users can search through a list of products.
- A **product details page** that shows more information when a product is clicked.
- Fully functional REST APIs, clean UI, and proper error handling.


# Tech Stack

- **Frontend**: React, Axios, React Router DOM  
- **Backend**: Java, Spring Boot, Spring Data JPA  
- **Database**: H2 (in-memory)  
- **API Docs**: Swagger 

---

# Key Features

# Backend (Spring Boot)

- `GET /products`: Fetch all products (with optional `?search=phone` query).
- `GET /products/{id}`: Fetch product details by ID.
- Partial search support on product `name` and `brand`.
- `data.sql` used to preload 20 sample products.
- API docs auto-generated using Swagger (`/swagger-ui.html`).

# Frontend (React)

- **Landing Page**:  
  - Search bar to find products by name or brand.
  - Displays product cards (image, name, price, brand, category).
- **Details Page**:  
  - Displays larger product image, full description, and other info.
  - "Back to Search" navigation included.
- Responsive design: Works on desktop, tablet, and mobile.
- Toast notifications for API errors.
- Loading spinners during data fetch.

# Folder Structure

assignment/
├── ecommerce-app/ # React frontend
│ └── src/
│
├── backend/productSearch  # Spring Boot backend
│ ├── src/
│ ├── data.sql

│ └── application.properties

---

# Getting Started

# Run Backend (Spring Boot)

```bash
cd backend
npm install
npm start

# Run frontend (React)
```bash
cd frontend
npm install
npm run dev




