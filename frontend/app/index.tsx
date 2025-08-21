import { useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../src/features/notes/notesThunks";
import { RootState, AppDispatch } from "../src/store";

export default function Index() {
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, error } = useSelector((state: RootState) => state.notes);

    useEffect(() => {
        dispatch(fetchNotes());
    }, []);

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#2563EB" />
            </View>
        );
    }

    if (error) {
        return (
            <View className="flex-1 justify-center items-center p-4">
                <Text className="text-red-500 text-lg">Error: {error}</Text>
            </View>
        );
    }

    return (
        <View className="flex-1 bg-blue-50 p-4">
            <Text className="text-2xl font-bold text-blue-800 mb-4">Мої нотатки</Text>

            <FlatList
                data={items}
                keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
                renderItem={({ item }) => (
                    <View className="p-4 mb-2 bg-white rounded-lg shadow">
                        <Text className="text-lg text-gray-700">{item.text}</Text>
                    </View>
                )}
                ListEmptyComponent={
                    <Text className="text-gray-500 text-center mt-4">Немає нотаток</Text>
                }
            />
        </View>
    );
}
