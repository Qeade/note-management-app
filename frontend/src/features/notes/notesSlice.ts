import { createSlice } from "@reduxjs/toolkit";
import { fetchNotes } from "./notesThunks";
import { Note } from "../../types";

interface NotesState {
    items: Note[];
    loading: boolean;
    error: string | null;
}

const initialState: NotesState = {
    items: [],
    loading: false,
    error: null,
};

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchNotes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch notes";
            });
    },
});

export default notesSlice.reducer;
