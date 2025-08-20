import axios from "axios";
import Constants from "expo-constants";

const { apiUrl } = Constants.expoConfig?.extra as { apiUrl: string };

console.log("👉 Axios baseURL:", apiUrl);

const axiosClient = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
    },
});

export default axiosClient;
