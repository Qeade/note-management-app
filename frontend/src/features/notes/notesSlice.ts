import { createSlice } from '@reduxjs/toolkit';
import { fetchNotes, fetchNoteById, createNote, updateNote, deleteNote } from './notesThunks';
import { Note } from '../../types';

interface NotesState {
    items: Note[];
    currentNote: Note | null;
    loading: boolean;
    error: string | null;
}

const initialState: NotesState = {
    items: [],
    currentNote: null,
    loading: false,
    error: null,
};

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        clearCurrentNote: (state) => {
            state.currentNote = null;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch all notes
            .addCase(fetchNotes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchNotes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch notes';
            })

            // fetch note by ID
            .addCase(fetchNoteById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNoteById.fulfilled, (state, action) => {
                state.loading = false;
                state.currentNote = action.payload;
            })
            .addCase(fetchNoteById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch note';
            })

            // Create note
            .addCase(createNote.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createNote.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(createNote.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to create note';
            })

            // update note
            .addCase(updateNote.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateNote.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.items.findIndex((note) => note.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
                if (state.currentNote && state.currentNote.id === action.payload.id) {
                    state.currentNote = action.payload;
                }
            })
            .addCase(updateNote.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to update note';
            })

            // delete note
            .addCase(deleteNote.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteNote.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter((note) => note.id !== action.payload);
                if (state.currentNote && state.currentNote.id === action.payload) {
                    state.currentNote = null;
                }
            })
            .addCase(deleteNote.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to delete note';
            });
    },
});

export const { clearCurrentNote, clearError } = notesSlice.actions;
export default notesSlice.reducer;
