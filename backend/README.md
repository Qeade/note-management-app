# Backend: Note Management Application

> The server-side API for the Note Management application, built with Node.js, Express, and TypeScript.

This server provides a RESTful API that handles all business logic for the application. It supports full CRUD (Create, Read, Update, Delete) operations for notes and uses a simple in-memory array for data storage, requiring no database setup.

## 🚀 Tech Stack

- **Framework:** Express.js
- **Language:** TypeScript
- **Runtime:** Node.js
- **Data Storage:** In-memory array (no database required)

## ▶️ Getting Started

Follow these instructions to get the backend server running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Qeade/note-management-app.git
    ```

2.  **Navigate to the backend directory:**
    ```sh
    cd note-management-app/backend
    ```

3.  **Install dependencies:**
    This command will install all the necessary packages defined in `package.json`.
    ```sh
    npm install
    ```

### Running the Development Server

To start the server, run the following command. This will launch the server in development mode using a tool like `nodemon`, which automatically restarts the server whenever you make changes to the code.

```sh
npm run dev
```

Once the command is executed, you should see a confirmation message in your terminal indicating that the server is running.

By default, the server will be available at: **`http://localhost:3000`**

This is the local URL that you will need to expose using a tool like `ngrok` for the mobile client to connect to it.

## 📝 API Endpoints

The server exposes the following endpoints for managing notes:

| Method | Endpoint        | Description                |
| :----- | :-------------- | :------------------------- |
| `GET`    | `/notes`        | Retrieve all notes         |
| `GET`    | `/notes/:id`    | Retrieve a single note     |
| `POST`   | `/notes`        | Create a new note          |
| `PUT`    | `/notes/:id`    | Update an existing note    |
| `DELETE` | `/notes/:id`    | Delete a note              |