# Movie Booking App

## Overview

This is a movie booking web application built using React. It allows users to sign up, login, view movie details, book tickets, and manage their bookings. Additionally, administrators can manage movies, theaters, and user accounts.

Prior to this we had worked on a common repo that has both client and server side code.[client-server-repo](https://github.com/dkiriinya/movie-ticketing-reviewing-system.git)

To access the server side code, access through [server-side-github-repo](https://github.com/dkiriinya/movie-ticketing-reviewing-system-server.git)

Using free render is a little bit of a challenge. Before going ahead with the installation kindly activate the server through this link.[server-link](https://movie-ticketing-reviewing-system-server.onrender.com/). wait up to 50 seconds for it to load. 


## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/dkiriinya/movie-ticketing-reviewing-system-client.git
```

2. Navigate to the project directory:

```
cd movie-ticketing-reviewing-system-client
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

The application should now be running on `http://localhost:3000`.

## Dependencies

- React: A JavaScript library for building user interfaces.
- react-router-dom: Declarative routing for React.
- Node.js: A JavaScript runtime environment.


## Usage

### Sign Up

Users can sign up for an account by navigating to the Sign Up page and providing their details.

### Login

Registered users can log in to their account using their email and password.

### Dashboard

Upon successful login, users are redirected to their dashboard where they can view their profile and manage their bookings.

### Movies

Users can browse through a list of movies, view details, and book tickets for their preferred movies.

### Admin Panel

Administrators have access to an admin panel where they can manage movies, theaters, and user accounts.

## File Structure
```
.
├── LICENSE.md
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── components
    │   ├── Admin.js
    │   ├── App.js
    │   ├── ComingSoon.js
    │   ├── Forms.js
    │   ├── Home.js
    │   ├── Login.js
    │   ├── MovieDetails.js
    │   ├── Movies.js
    │   ├── Navbar.js
    │   ├── NowShowing.js
    │   ├── SignUp.js
    │   ├── Theaters.js
    │   ├── TheatreDetails.js
    │   └── UserDashboard.js
    ├── index.css
    ├── index.js
    └── styles
        └── Movies.css
```


## API Integration

The application integrates with a backend API to fetch movie data, user authentication, and session management.

## Contributors

- [Don Gitonga](https://github.com/dkiriinya)
- [Irene Jay](https://github.com/irenejay)
- [Eliab Karan](https://github.com/karaneliab)
- [Evalyne Nyakio](https://github.com/Nyakio-Eva)
- [Rachael Njoki](https://github.com/Rayken20)



## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit) file for details.
