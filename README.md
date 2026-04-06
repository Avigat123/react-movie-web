# React Movie Web App

**Live Demo:** [https://react-movie-web-seven.vercel.app](https://react-movie-web-seven.vercel.app)

A modern, responsive movie discovery application built with React and Vite. This app allows users to browse popular movies, search for specific titles, and save their favorite movies for quick access later.

## Features

- **Movie Discovery**: View a list of current popular movies using the TMDB API.
- **Search Functionality**: Search for any movie by title.
- **Favorites System**: Save and manage a list of favorite movies managed globally with React Context.
- **Responsive Design**: Modern, responsive UI with custom CSS.
- **Client-Side Routing**: Smooth navigation between the Home page and Favorites page using React Router.

## Technologies Used

- **React** 
- **Vite** (Build Tool)
- **React Router DOM** (Navigation)
- **Context API** (State Handling)
- **The Movie Database (TMDB) API** (Data Source)
- **Vanilla CSS** (Styling)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher recommended)
- npm or yarn

You will also need an API key from TMDB to fetch movie data:
1. Go to [The Movie Database (TMDB)](https://www.themoviedb.org/) and create an account.
2. Navigate to your profile settings -> API and request an API key.

## Installation & Setup

1. **Navigate to the project directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory (where `vite.config.js` is located) and add your TMDB API key:
   ```env
   VITE_API_KEY=your_tmdb_api_key_here
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open in Browser**:
   Navigate to `http://localhost:5173` (or the port specified in your console) in your web browser.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the local development server using Vite.
- `npm run build`: Bundles the app for production into the `dist` folder.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the generated production build locally.
