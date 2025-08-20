import { createAsyncThunk } from "@reduxjs/toolkit";
import { Note } from "../../types";
import { notesApi } from "../../api/notesApi";

export const fetchNotes = createAsyncThunk<Note[]>(
    "notes/fetchNotes",
    async () => {
        return await notesApi.getAll();
    }
);
