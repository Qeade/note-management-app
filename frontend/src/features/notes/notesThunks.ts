import { createAsyncThunk } from '@reduxjs/toolkit';
import { Note } from '../../types';
import { notesApi } from '../../api/notesApi';

export const fetchNotes = createAsyncThunk<Note[]>('notes/fetchNotes', async () => {
    return await notesApi.getAll();
});

export const fetchNoteById = createAsyncThunk<Note, number>(
    'notes/fetchNoteById',
    async (id: number) => {
        return await notesApi.getById(id);
    },
);

export const createNote = createAsyncThunk<Note, Omit<Note, 'id' | 'createdAt'>>(
    'notes/createNote',
    async (noteData) => {
        return await notesApi.create(noteData);
    },
);

export const updateNote = createAsyncThunk<
    Note,
    { id: number; note: Omit<Note, 'id' | 'createdAt'> }
>('notes/updateNote', async ({ id, note }) => {
    return await notesApi.update(id, note);
});

export const deleteNote = createAsyncThunk<number, number>(
    'notes/deleteNote',
    async (id: number) => {
        await notesApi.remove(id);
        return id;
    },
);
