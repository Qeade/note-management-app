import axiosClient from './axiosClient';
import { Note } from '../types';

export const notesApi = {
    getAll: async (): Promise<Note[]> => {
        const res = await axiosClient.get('/notes');
        console.log('getAll front');
        return res.data;
    },

    getById: async (id: number): Promise<Note> => {
        const res = await axiosClient.get(`/notes/${id}`);
        return res.data;
    },

    create: async (note: Omit<Note, 'id' | 'createdAt'>): Promise<Note> => {
        const res = await axiosClient.post('/notes', note);
        return res.data;
    },

    update: async (id: number, note: Omit<Note, 'id' | 'createdAt'>): Promise<Note> => {
        const res = await axiosClient.put(`/notes/${id}`, note);
        return res.data;
    },

    remove: async (id: number): Promise<void> => {
        await axiosClient.delete(`/notes/${id}`);
    },
};
