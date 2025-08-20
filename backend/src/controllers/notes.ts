import { Request, Response } from "express";
import * as Notes from "../models/notes";

export const getAll = (req: Request, res: Response): void => {
    console.log("getAll api");
    const allNotes = Notes.getAll();
    res.json(allNotes);
};

export const getById = (req: Request, res: Response): void => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400).json({ error: "Id must be a number" });
        return;
    }

    const note = Notes.getById(id);

    if (!note) {
        res.status(404).json({ error: "Note not found" });
        return;
    }

    res.status(200).json(note);
};


export const create = (req: Request, res: Response): void => {
    const { text } = req.body;

    if (!text) {
        res.status(400).json({ error: "Text is required" });
        return;
    }

    const newNote = Notes.create(text);
    res.status(201).json(newNote);
};

export const update = (req: Request, res: Response): void => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400).json({ error: "Id must be a number" });
        return;
    }

    const { newText } = req.body;

    if (!newText) {
        res.status(400).json({ error: "Text is required" });
        return;
    }

    const updatedNote = Notes.update(id, newText);

    if (!updatedNote) {
        res.status(404).json({ error: "Note not found" });
        return;
    }

    res.status(200).json(updatedNote);
};



export const remove = (req: Request, res: Response): void => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400).json({ error: "Id must be a number" });
        return;
    }

    const deletedNote = Notes.remove(id);

    if (!deletedNote) {
        res.status(404).json({ error: "Note not found" });
        return;
    }

    res.status(200).json({ message: "Note deleted successfully", note: deletedNote });
};