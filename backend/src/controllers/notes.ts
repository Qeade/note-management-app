import { Request, Response } from 'express';
import * as Notes from '../models/notes';

export const getAll = (req: Request, res: Response): void => {
    console.log('getAll api');
    const allNotes = Notes.getAll();
    res.json(allNotes);
};

export const getById = (req: Request, res: Response): void => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400).json({ error: 'Id must be a number' });
        return;
    }

    const note = Notes.getById(id);

    if (!note) {
        res.status(404).json({ error: 'Note not found' });
        return;
    }

    res.status(200).json(note);
};

export const create = (req: Request, res: Response): void => {
    const { title, text } = req.body;

    if (!title || !text) {
        res.status(400).json({ error: 'Title and text are required' });
        return;
    }

    const newNote = Notes.create(title.trim(), text.trim());
    res.status(201).json(newNote);
};

export const update = (req: Request, res: Response): void => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400).json({ error: 'Id must be a number' });
        return;
    }

    const { title, text } = req.body;

    if (!title || !text) {
        res.status(400).json({ error: 'Title and text are required' });
        return;
    }

    const updatedNote = Notes.update(id, title.trim(), text.trim());

    if (!updatedNote) {
        res.status(404).json({ error: 'Note not found' });
        return;
    }

    res.status(200).json(updatedNote);
};

export const remove = (req: Request, res: Response): void => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400).json({ error: 'Id must be a number' });
        return;
    }

    const deletedNote = Notes.remove(id);

    if (!deletedNote) {
        res.status(404).json({ error: 'Note not found' });
        return;
    }

    res.status(200).json({ message: 'Note deleted successfully', note: deletedNote });
};
