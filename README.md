# Notes Management Application

> A full-stack test application for creating, editing, and deleting notes, featuring an Express API and a React Native mobile client built with Expo.

## 📖 About The Project

This application allows users to manage their notes through a simple mobile interface. It is built as a demonstration of skills in both backend and frontend development. The backend provides a RESTful API, and the frontend is a cross-platform mobile app.

## 🚀 Technology Stack

The project is divided into two main parts: a backend server and a frontend client.

*   **Backend:**
    *   [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
    *   [TypeScript](https://www.typescriptlang.org/)
    *   **Data Storage:** In-memory array (no database required).

*   **Frontend:**
    *   [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
    *   [Redux Toolkit](https://redux-toolkit.js.org/) for state management
    *   [NativeWind](https://www.nativewind.dev/) for styling (Tailwind CSS)
    *   [Axios](https://axios-http.com/) for API communication
    *   [i18next](https://www.i18next.com/) for localization (English & Ukrainian)

## ✨ Features

### Backend API
*   A RESTful API server that handles all business logic for note management, supporting full CRUD (Create, Read, Update, Delete) operations.

### Frontend Client
*   A user-friendly interface for note management (CRUD operations).
*   Centralized state management with Redux.
*   Language switching between English and Ukrainian.
*   Includes an end-to-end test for reliability.

## 📜 Detailed Instructions

For detailed instructions on how to install dependencies, configure the environment, and run each part of the project, please refer to their respective `README.md` files:

- **[➡️ Backend Setup Instructions](./backend/README.md)**
- **[➡️ Frontend Setup Instructions](./frontend/README.md)**