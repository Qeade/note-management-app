import { configureStore } from '@reduxjs/toolkit';
import notesSlice from './features/notes/notesSlice';
import languageSlice from './features/language/languageSlice';

export const store = configureStore({
    reducer: {
        notes: notesSlice,
        language: languageSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
