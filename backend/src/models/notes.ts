export interface Note {
    id: number;
    title: string;
    text: string;
    createdAt: string;
}

let notes: Note[] = [
    {
        id: 1,
        title: 'First note',
        text: 'This is a new note',
        createdAt: new Date().toISOString(),
    },
];

export const getAll = (): Note[] => notes;

export const getById = (id: number): Note | undefined => {
    return notes.find((note) => note.id === id);
};

export const create = (title: string, text: string): Note => {
    const newNote: Note = {
        id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1,
        title,
        text,
        createdAt: new Date().toISOString(),
    };

    notes.push(newNote);
    return newNote;
};

export const update = (id: number, title: string, text: string): Note | undefined => {
    const note = notes.find((note) => note.id === id);

    if (!note) {
        return undefined;
    }

    note.title = title;
    note.text = text;

    return note;
};

export const remove = (id: number): Note | undefined => {
    const index = notes.findIndex((note) => note.id === id);

    if (index === -1) return undefined;

    const deletedNote = notes[index];
    notes.splice(index, 1);

    return deletedNote;
};
