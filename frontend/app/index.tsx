import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TextInput,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../src/store';
import { fetchNotes, createNote } from '../src/features/notes/notesThunks';
import { clearError } from '../src/features/notes/notesSlice';
import { Note } from '../src/types';
import NoteItem from '../src/components/NoteItem';
import { Ionicons } from '@expo/vector-icons';

export default function NotesScreen() {
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, error } = useSelector((state: RootState) => state.notes);

    const [newNoteTitle, setNewNoteTitle] = useState('');
    const [newNoteText, setNewNoteText] = useState('');

    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            Alert.alert('Помилка', error);
            dispatch(clearError());
        }
    }, [error, dispatch]);

    const handleCreateNote = async () => {
        if (newNoteTitle.trim() && newNoteText.trim()) {
            await dispatch(
                createNote({
                    title: newNoteTitle.trim(),
                    text: newNoteText.trim(),
                }),
            );
            setNewNoteTitle('');
            setNewNoteText('');
        } else {
            Alert.alert('Помилка', 'Заголовок і текст не можуть бути пустими');
        }
    };

    const renderNoteItem = ({ item }: { item: Note }) => <NoteItem note={item} />;

    return (
        <>
            <Stack.Screen options={{ title: 'Мої нотатки', headerShown: false }} />
            <SafeAreaView className="flex-1 bg-gray-50">
                <View className="flex-1 bg-gray-50 px-6 pt-14">
                    <View className="flex-row justify-center items-center mb-8">
                        <Ionicons name="document-text" size={26} color="#6B7280" />
                        <Text className="text-3xl font-semibold ml-3 text-gray-800">
                            Мої нотатки
                        </Text>
                    </View>

                    <View className="bg-white p-6 mb-6 rounded-2xl shadow-sm border border-gray-100">
                        <TextInput
                            value={newNoteTitle}
                            onChangeText={setNewNoteTitle}
                            className="border border-gray-200 rounded-xl p-4 mb-4 text-base bg-gray-50"
                            placeholder="Заголовок нотатки..."
                            placeholderTextColor="#9CA3AF"
                        />
                        <TextInput
                            value={newNoteText}
                            onChangeText={setNewNoteText}
                            multiline
                            className="border border-gray-200 rounded-xl p-4 mb-5 text-base min-h-[90px] bg-gray-50"
                            placeholder="Введіть текст нотатки..."
                            placeholderTextColor="#9CA3AF"
                        />
                        <TouchableOpacity
                            onPress={handleCreateNote}
                            className="bg-green-600  py-4 rounded-xl flex-row justify-center items-center shadow-sm"
                            disabled={!newNoteTitle.trim() || !newNoteText.trim() || loading}
                            style={{
                                opacity:
                                    !newNoteTitle.trim() || !newNoteText.trim() || loading
                                        ? 0.5
                                        : 1,
                            }}
                        >
                            {loading ? (
                                <ActivityIndicator
                                    size="small"
                                    color="white"
                                    style={{ marginRight: 8 }}
                                />
                            ) : (
                                <Ionicons
                                    name="add-circle"
                                    size={20}
                                    color="white"
                                    style={{ marginRight: 8 }}
                                />
                            )}
                            <Text className="text-white font-medium text-center text-base">
                                {loading ? 'Створення...' : 'Створити нотатку'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {loading && items.length === 0 ? (
                        <View className="flex-1 justify-center items-center">
                            <ActivityIndicator size="large" color="#34D399" />
                            <Text className="mt-3 text-gray-500 font-medium">Завантаження...</Text>
                        </View>
                    ) : (
                        <FlatList
                            data={items}
                            renderItem={renderNoteItem}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 20 }}
                            ListEmptyComponent={
                                <View className="py-16 items-center">
                                    <View className="bg-gray-100 rounded-full p-6 mb-4">
                                        <Ionicons
                                            name="document-outline"
                                            size={40}
                                            color="#9CA3AF"
                                        />
                                    </View>
                                    <Text className="text-gray-600 text-lg font-medium mb-2">
                                        Нотаток поки немає
                                    </Text>
                                    <Text className="text-gray-400 text-center px-8 leading-5">
                                        Створіть свою першу нотатку, щоб почати організовувати свої
                                        думки
                                    </Text>
                                </View>
                            }
                        />
                    )}
                </View>
            </SafeAreaView>
        </>
    );
}
