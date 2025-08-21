import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../hooks/redux';
import { AppDispatch } from '../store';
import { updateNote, deleteNote } from '../features/notes/notesThunks';
import { Note } from '../types';
import { Ionicons } from '@expo/vector-icons';

interface NoteItemProps {
    note: Note;
}

export default function NoteItem({ note }: NoteItemProps) {
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();
    const currentLanguage = useAppSelector((state) => state.language.currentLanguage);

    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(note.title);
    const [editText, setEditText] = useState(note.text);

    const handleDelete = () => {
        Alert.alert(t('notes.deleteNote'), t('notes.deleteConfirm'), [
            { text: t('common.cancel'), style: 'cancel' },
            {
                text: t('common.delete'),
                style: 'destructive',
                onPress: () => dispatch(deleteNote(note.id)),
            },
        ]);
    };

    const handleSave = async () => {
        if (editTitle.trim() && editText.trim()) {
            await dispatch(
                updateNote({
                    id: note.id,
                    note: { title: editTitle.trim(), text: editText.trim() },
                }),
            );
            setIsEditing(false);
        } else {
            Alert.alert(t('common.error'), t('notes.validation.emptyFields'));
        }
    };

    const handleCancel = () => {
        setEditTitle(note.title);
        setEditText(note.text);
        setIsEditing(false);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);

        const locale = currentLanguage === 'uk' ? 'uk-UA' : 'en-US';

        return date.toLocaleDateString(locale, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <View className="bg-white p-6 mb-4 rounded-2xl border border-gray-100 shadow-sm">
            {isEditing ? (
                <>
                    <TextInput
                        value={editTitle}
                        onChangeText={setEditTitle}
                        className="border border-gray-200 rounded-xl p-4 mb-4 text-lg font-medium bg-gray-50 text-gray-800"
                        placeholder={t('notes.noteTitle')}
                        placeholderTextColor="#9CA3AF"
                    />
                    <TextInput
                        value={editText}
                        onChangeText={setEditText}
                        multiline
                        className="border border-gray-200 rounded-xl p-4 mb-6 text-base min-h-[80px] bg-gray-50 text-gray-700 leading-6"
                        placeholder={t('notes.noteContent')}
                        placeholderTextColor="#9CA3AF"
                    />
                    <View className="flex-row gap-3">
                        <TouchableOpacity
                            onPress={handleSave}
                            className="bg-green-600 px-6 py-3 rounded-xl flex-1 flex-row justify-center items-center shadow-sm"
                        >
                            <Ionicons
                                name="checkmark"
                                size={18}
                                color="white"
                                style={{ marginRight: 6 }}
                            />
                            <Text className="text-white font-medium text-center">
                                {t('common.save')}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleCancel}
                            className="bg-gray-300 px-6 py-3 rounded-xl flex-1 flex-row justify-center items-center"
                        >
                            <Text className="text-gray-700 font-medium text-center">
                                {t('common.cancel')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <>
                    <Text className="text-xl font-semibold mb-3 text-gray-800 leading-7">
                        {note.title}
                    </Text>
                    <Text className="text-base mb-5 text-gray-600 leading-6">{note.text}</Text>

                    <View className="flex-row items-center mb-5 bg-gray-50 px-3 py-2 rounded-lg">
                        <Ionicons name="time-outline" size={16} color="#6B7280" />
                        <Text className="text-sm text-gray-500 ml-2 font-medium">
                            {formatDate(note.createdAt)}
                        </Text>
                    </View>

                    <View className="flex-row gap-3">
                        <TouchableOpacity
                            onPress={() => setIsEditing(true)}
                            className="bg-green-600 px-5 py-3 rounded-xl flex-1 flex-row justify-center items-center shadow-sm"
                        >
                            <Ionicons
                                name="pencil"
                                size={16}
                                color="white"
                                style={{ marginRight: 6 }}
                            />
                            <Text className="text-white font-medium text-center">
                                {t('common.edit')}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleDelete}
                            className="bg-rose-500 px-5 py-3 rounded-xl flex-1 flex-row justify-center items-center"
                        >
                            <Ionicons
                                name="trash"
                                size={16}
                                color="white"
                                style={{ marginRight: 6 }}
                            />
                            <Text className="text-white font-medium text-center">
                                {t('common.delete')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
}
