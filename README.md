Flex Recipe Finder

A responsive Recipe Finder web application built with React, Vite, and Tailwind CSS.
Users can search for meals by name and view detailed recipe information including ingredients, preparation steps, and video tutorials.

 Features

- Search recipes by dish name

- Fetch data from TheMealDB API

- Display recipe cards with image, category, and cuisine

- View detailed recipe information in a modal

- Dynamic ingredient list extraction

- Embedded YouTube cooking tutorial (if available)

- Error handling and loading states

- Fully responsive design using Tailwind CSS

- Footer with dynamic copyright year

 Tech Stack

React

Vite

Tailwind CSS

JavaScript (ES6+)

TheMealDB API

API Used

This project uses the free API from:

TheMealDB
https://www.themealdb.com/

Example endpoint:
https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

Project Structure

src/
 ├── components/
 │   ├── Header.jsx
 │   ├── SearchBar.jsx
 │   ├── RecipeCard.jsx
 │   ├── RecipeDetails.jsx
 │   └── Footer.jsx
 ├── App.jsx
 └── main.jsx

  What I Learned

Managing state with useState

Fetching data using useEffect

Handling loading and error states

Building reusable React components

Working with dynamic API data structures

Creating responsive layouts using Tailwind CSS

Installation & Setup

1. Clone the repository: git clone <your-repo-link>
2. Navigate into the project folder: eg. cd recipe-finder
3. Install dependencies: npm install
4. Start the development server: npm run dev

Deployment

The application can be deployed using:

Netlify
Vercel
GitHub Pages

live demo: https://alx-final-project-rho.vercel.app/

live demo: https://alx-final-project-rho.vercel.app/

Author.
John Ngugi