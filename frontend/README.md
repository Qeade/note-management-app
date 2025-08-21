# Frontend: Note Management Application

> The client-side of the Note Management application, built with React Native and Expo. It provides a user interface to interact with the backend API.

This mobile application allows users to create, view, update, and delete notes. It features state management with Redux, multi-language support (English & Ukrainian), and is styled using NativeWind.

## 🚀 Tech Stack

- **Framework:** React Native with Expo
- **State Management:** Redux Toolkit
- **Styling:** NativeWind (Tailwind CSS)
- **API Client:** Axios
- **Localization:** i18next

## ▶️ Getting Started

Follow these instructions to get the frontend application running on your local machine for development and testing.

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [ngrok](https://ngrok.com/download) account and CLI
- The **Expo Go** app on your iOS or Android device.

### 1. Installation

First, clone the repository and install the necessary dependencies.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Qeade/note-management-app.git
    ```

2.  **Navigate to the frontend directory:**
    ```sh
    cd note-management-app/frontend
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

### 2. Configuration: Connecting to the Backend API

The Expo Go app on your phone cannot directly access a backend server running on `localhost`. Additionally, mobile devices often require secure `https://` connections. We will use **ngrok** to create a secure public URL for your local backend server.

1.  **Start your backend server.** Make sure it is running locally (e.g., on port 3000).

2.  **Launch ngrok** to expose your backend's port. Open a **new terminal** and run the following command (use the port your backend is running on):
    ```sh
    ngrok http 3000
    ```

3.  **Copy the ngrok URL.** After running the command, ngrok will provide a "Forwarding" URL that looks something like this: `https://your-unique-hash.ngrok-free.app`. **Copy the `https` URL.**

4.  **Create an environment file.** In the `frontend` directory, create a new file named `.env`.

5.  **Add the API URL to the `.env` file.** Paste the ngrok URL you copied into the file, like this:
    ```
    API_URL=https://your-unique-hash.ngrok-free.app
    ```

### 3. Running the Application

Now that the connection to the backend is configured, you can run the mobile app.

1.  **Start the Expo development server.** For the best experience with physical devices, use the `--tunnel` option. This helps the Expo Go app connect reliably to your computer.
    ```sh
    npx expo start --tunnel
    ```

2.  **Connect your device.** A QR code will appear in the terminal. Open the Expo Go app on your phone and scan the QR code to launch the application. The app will now be able to communicate with your local backend through the ngrok tunnel.