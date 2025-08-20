import 'dotenv/config';

export default {
    expo: {
        name: "notes-app",
        slug: "notes-app",
        extra: {
            apiUrl: process.env.API_URL,
        },
    },
};
