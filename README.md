# Elearning


An end-to-end e‑learning platform with course management, quizzes, certificates, enrollment and progress tracking, discussion forums, and a modern, responsive UI. The project is a monorepo with a React client and an Express/MongoDB server.

## Table of Contents
- **Overview**
- **Features**
- **Tech Stack**
- **Repository Structure**
- **Getting Started**
- **Environment Variables**
- **Running Locally**
- **Build & Production**
- **API Overview**
- **Security & Performance**
- **Deployment**
- **Contributing**
- **License**

## Overview
This platform enables admins to create and manage courses, quizzes, and content; and empowers learners with a rich course player, interactive quizzes, discussion forums, and downloadable certificates upon completion. Refer to `ENHANCED_FEATURES.md` for a comprehensive description of the latest functionality and data models.

## Features

- **Admin**
  - Login/Signup
  - Manage users
  - Add blogs/articles
  - Add video courses
  - Add and manage certification test questions
  - Logout

- **User**
  - Login/Signup
  - Profile and learning dashboard
  - Read blogs/articles
  - Run in‑browser code editor
  - Take paid certification tests
  - Download completion certificates
  - Logout

Additional highlights (see `ENHANCED_FEATURES.md` for details):
- Enrollment with detailed lesson progress, notes, and analytics
- Advanced quiz system (MCQ, true/false, fill-in-the-blank, essay), time limits, attempts, scoring
- Certificate generation with unique IDs, QR/verification code, and PDF export
- Course-specific discussion forums with moderation tools and engagement metrics
- Modern, responsive UI/UX with improved navigation and accessibility

## Tech Stack

- **Client**
  - React 18 (Create React App)
  - React Router v6
  - Bootstrap 5, Tailwind CSS (utility-first styling)
  - Axios, React Icons, React Bootstrap, Headless UI
  - Ace Editor integrations (`react-ace`, `ace-builds`)
  - PDF/Canvas utils (`jspdf`, `html2canvas`)

- **Server**
  - Node.js, Express
  - MongoDB, Mongoose
  - JWT authentication
  - Multer (uploads), Nodemailer (email), Express Validator
  - Google OAuth 2.0 (`passport`, `passport-google-oauth20`)
  - CORS, dotenv

- **Deployment**
  - Client: Vercel
  - Server: Render.com
  - Database: MongoDB Atlas

## Repository Structure

```
Elearning/
├── client/                 # React SPA (Create React App)
│   ├── src/
│   ├── public/
│   ├── package.json        # CRA scripts: start, build, test, eject
│   └── tailwind.config.js
└── server/                 # Express API
    ├── controllers/
    ├── routes/
    ├── models/
    ├── middleware/
    ├── util/
    ├── app.js              # Server entrypoint
    └── package.json        # scripts: start (nodemon), build
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- MongoDB (local or Atlas)

### Install Dependencies
- Client
  - `cd client && npm install`
- Server
  - `cd server && npm install`

## Environment Variables

Create `.env` files for both client and server. The following keys are used across the project:

- **Client (`client/.env`)**
  - `REACT_APP_API_URL` = `https://your-server-url.com`

- **Server (`server/.env`)**
  - `DB_URL` = `your-mongodb-connection-string`
  - `JWT_SECRET` = `your-jwt-secret`
  - `GOOGLE_CLIENT_ID` = `your-google-client-id`
  - `GOOGLE_CLIENT_SECRET` = `your-google-client-secret`
  - `GOOGLE_CALLBACK_URL` = `https://your-server-url.com/auth/google/callback`
  - `CLIENT_URL` = `https://your-client-url.com`

If you use email features, add your SMTP provider config (e.g., `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`).

## Running Locally

Open two terminals:

1) Server
```
cd server
npm start
```

2) Client
```
cd client
npm start
```

The React dev server (port 3000) should point to your API via `REACT_APP_API_URL`.

## Build & Production

- Client
```
cd client
npm run build
```

- Server
```
cd server
npm run build
```
Note: The server `build` script runs `node app.js`. For production hosting, run with a process manager (e.g., PM2) or your platform’s run command.

## API Overview

Selected endpoints (see `ENHANCED_FEATURES.md` for full list):

- **Auth**
  - `POST /auth/signup`
  - `POST /auth/login`
  - `GET /auth/google`
  - `GET /auth/google/callback`

- **Courses**
  - `GET /courses`
  - `GET /courses/:id`
  - `POST /courses` (admin)
  - `PUT /courses/:id` (admin)
  - `DELETE /courses/:id` (admin)

- **Enrollment**
  - `POST /enrollment/enroll`
  - `GET /enrollment/my-enrollments`
  - `PATCH /enrollment/:id/lesson/:moduleId/:lessonId`
  - `POST /enrollment/:id/rate`
  - `GET /enrollment/:courseId/analytics`

- **Certificates**
  - `POST /certificates/generate`
  - `GET /certificates/:id`
  - `GET /certificates/verify/:code`

- **Quizzes**
  - `POST /quizzes`
  - `GET /quizzes/course/:courseId`
  - `POST /quizzes/:id/submit`
  - `GET /quizzes/:id/results`

- **Discussions**
  - `POST /discussions`
  - `GET /discussions/course/:courseId`
  - `POST /discussions/:id/comments`
  - `PUT /discussions/:id`

## Security & Performance

- **Security**: JWT auth, input validation/sanitization, CORS config, rate limiting (recommended), secrets via env vars
- **Performance**: DB indexing, optimized queries, client lazy loading and code splitting, image optimization and caching

## Deployment

- **Client (Vercel)**
  - Connect the `client/` directory to Vercel
  - Configure `REACT_APP_API_URL` in Vercel project settings
  - Automatic deploys on push

- **Server (Render.com)**
  - Connect the `server/` directory to Render
  - Configure environment variables (`DB_URL`, `JWT_SECRET`, Google OAuth, `CLIENT_URL`)
  - Use MongoDB Atlas
  - Automatic deploys on push

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make changes and add tests where appropriate
4. Open a pull request with a clear description

## License
MIT

## Support
- Open an issue in this repository with steps to reproduce and logs where relevant
- See `ENHANCED_FEATURES.md` for more technical detail

---

Last updated: September 2025
