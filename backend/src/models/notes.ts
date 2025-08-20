export interface Note {
    id: number;
    text: string;
}

let notes: Note[] = [
    { id: 1, text: "Перша" },
    { id: 2, text: "Друга" }
];

export const getAll = (): Note[] => notes;

export const getById = (id: number): Note | undefined => {
    return notes.find(note => note.id === id);
};


export const create = (text: string): Note => {
    const newNote: Note = {
        id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1,
        text
    };

    notes.push(newNote);
    return newNote;
};


export const update = (id: number, newText: string): Note | undefined => {
    const note = notes.find(note => note.id === id);

    if (!note) {
        return undefined; // якщо не знайшли
    }

    note.text = newText;
    return note;
};

export const remove = (id: number): Note | undefined => {
    const index = notes.findIndex(note => note.id === id);

    if (index === -1) return undefined;

    const deletedNote = notes[index];

    notes.splice(index, 1);

    return deletedNote;
};


