# ShoppersStop - webapp

## Overview
ShoppersStop is a web application project was divided into modular components, enabling efficient collaboration and faster development.

The application allows users to browse products, add items to their cart, and complete purchases with secure authentication and payment flows. It is fully responsive across different devices.

---

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Project Structure](#project-structure)
3. [Backend Architecture](#backend-architecture)
4. [Frontend Architecture](#frontend-architecture)
5. [Authentication Flow](#authentication-flow)
6. [Product Purchase Flow](#product-purchase-flow)
7. [Responsive Design](#responsive-design)
8. [Learnings](#learnings)

---

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript (ES6+), Local Storage, API calls, Dynamic DOM manipulation  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, Passport.js, JWT Authentication  
- **Tools & Libraries:** bcrypt, dotenv, cors, express-validator, uuid  

## Additional Tools
- **ES Modules (`import/export`)**
- **LocalStorage** – Client-side data persistence
- **Fetch API** – Network requests
- **Google Fonts & Font Awesome** – UI icons and typography
- **Live Server (VS Code Extension)** – Local development server

---

## Authentication Flow

### Signup
- Users must register to make purchases.  
![Signup Page](https://user-images.githubusercontent.com/93375038/146685540-9bb9e3c2-fda7-4817-a3a9-31abc9a2ecc2.png)

### Login
After signing up, users log in to access the home page.

## Product Purchase Flow
### Browsing Products
- Users select a product category via the navbar, which redirects them to the product page.  

![Product Listing](https://user-images.githubusercontent.com/93375038/146685609-95b4af73-03e7-4dba-9a0a-7aa00e5c5a22.png)

### Sorting & Adding to Cart
- Users can sort products by brand, color, price, or discount and add desired items to the cart.  
![Sorting and Cart](https://user-images.githubusercontent.com/93375038/146685663-54099097-3e4d-4a89-9812-17105a600641.png)

### Cart & Checkout
- Cart page displays selected items and total bill.  
![Cart & Checkout](https://user-images.githubusercontent.com/93375038/146685690-88b28b68-3661-4c10-bfb2-192f580e3acc.png)

### Delivery Address
- Users input their delivery address during checkout.  
![Delivery Address](https://user-images.githubusercontent.com/93375038/146685712-7ecb0255-c07c-4c89-a2f3-66d3c4cead39.png)

### Payment
- Users enter payment information to complete the purchase.  
![Payment Page](https://user-images.githubusercontent.com/93375038/146685731-8be4906b-f979-4db0-86ed-9c4357ab60c8.png)

### Order Completion
- Upon successful payment, the order is placed, and users are redirected to the home page.

---

## Navbar & Footer

- Navbar supports hover effects showing categories and product types.  
![Navbar](https://user-images.githubusercontent.com/93375038/146685507-668c2483-d5e1-4c70-a1e4-061af3f0dd44.png)

- Footer contains quick links and information.  
![Footer](https://user-images.githubusercontent.com/93375038/146685811-cc0de8d1-3e60-4315-9626-44c1206c8a67.png)  
![Footer Example](https://user-images.githubusercontent.com/93375038/146685817-d8526d58-4fb0-4c09-a32a-8a30755ef449.png)

---

## Responsive Design

The application is fully responsive across mobile and tablet devices.  
![Mobile View](https://user-images.githubusercontent.com/93375038/146685569-cede5ea0-744d-40ae-915a-3b79811fa44f.png)  
![Tablet View](https://user-images.githubusercontent.com/93375038/146685573-08fb48df-8e4e-454d-9698-115742c97648.png)  
![Home Page Responsive](https://user-images.githubusercontent.com/93375038/146685577-6c2a1073-ee4c-4871-9df7-b528654c352d.png)

---

## Learnings

During the project, we gained experience in:

1. **Backend Development:**  
   - Setting up Express.js server  
   - Connecting to MongoDB using Mongoose  
   - Authentication with JWT and Google OAuth2  
   - Middleware for role-based authorization  

2. **Frontend Development:**  
   - Modular component structure using import/export  
   - Responsive design using CSS and media queries  
   - Dynamic product rendering and sorting  

3. **Collaboration & Version Control:**  
   - Dividing tasks among team members  
   - Efficient Git workflow with branches and commits  
   - Managing sensitive data using `.env` and `.gitignore`  

4. **Security:**  
   - Securing API endpoints  
   - Encrypting passwords with bcrypt  
   - Preventing secret exposure with GitHub push protection  

## Concepts Learned

### Frontend Development
- DOM manipulation
- Event handling
- Dynamic HTML rendering
- Client-side routing
- Responsive design

### JavaScript
- ES6 modules
- Arrow functions
- Async/Await
- Fetch API
- Closures and scope
- Conditional rendering

### Web Development Practices
- Modular file organization
- Separation of concerns
- UI state management
- Error handling
- LocalStorage usage

### Real-World Skills
- Building scalable UI
- Debugging import errors
- Handling API responses
- Managing authentication flow
- Working with third-party APIs

---

## Required Configurations to Run in VS Code

### Why a Local Server Is Needed
- The project uses ES Modules (`import/export`) and Fetch API.
- Browsers block these features when opening HTML files directly.
- A **local development server** is required.

---

### Step-by-Step Setup

# Frontend Setup
1. **Install VS Code**  
   Download and install Visual Studio Code.

2. **Install Live Server Extension**  
   - Open VS Code → Extensions → Search: **Live Server** → Install

3. **Open the Project Folder**  
   - Open `team-shoppersstop` as a folder in VS Code

4. **Check JS Imports**  
   Ensure all JS imports use **relative paths**:
   ```js
   import navbar from "./scripts/navbarAndFooter.js";
5. Start the Server
   - Right-click index.html → Open with Live Server
   - Runs at: http://127.0.0.1:5500
  
# Backend Setup for Shoppers API

## 1. Prerequisites

Before running the backend, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local or remote instance)

---

## 2. Clone or Download the Project

```bash
git clone <your-repository-url>
cd shoppers_api
```
## 3. Install Dependencies

   Run the following command to install all necessary packages listed in package.json
   ```bash
npm install
```
## 4. Dependencies

Install the following dependencies for your project:

- `express` - Web framework for building REST APIs  
- `mongoose` - MongoDB object modeling  
- `bcrypt` - Password hashing  
- `jsonwebtoken` - JWT authentication  
- `passport` and `passport-google-oauth2` - Google OAuth login  
- `cors` - Cross-Origin Resource Sharing  
- `dotenv` - Load environment variables  
- `uuid` - Generate unique IDs  
- `express-validator` - Request validation middleware  

## 5. Configure Environment Variables

Create a `.env` file in the root of your project (already partially provided) and add your credentials:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:1234/auth/google/callback
MONGODB_URI=mongodb://127.0.0.1:27017/db-name
```
- Replace your_google_client_id and your_google_client_secret with credentials from your Google Developer Console API's project.
- Replace db-name with your MongoDB database name.

## 6. Run the Backend Server
- Use the server script defined in package.json:
```
npm run server
```
   The server automatically reloads on file changes.
   By default, the server listens on: http://localhost:1234.

## Future Enhancements
- Integration of payment gateways  
- Admin panel for product management  
- Advanced search and filtering  
- Email notifications for orders  

---

