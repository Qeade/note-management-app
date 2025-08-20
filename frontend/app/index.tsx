import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../src/features/notes/notesThunks";
import { RootState, AppDispatch } from "../src/store";
import { View, Text, FlatList, ActivityIndicator } from "react-native";

export default function NotesScreen() {
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, error } = useSelector((state: RootState) => state.notes);

    useEffect(() => {
        dispatch(fetchNotes());
    }, []);

    if (loading) return <ActivityIndicator size="large" />;
    if (error){
        console.log(error);
        return <Text>Error: {error}</Text>;
    }

    return (
        <View className="flex-1 bg-white p-4">
            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View className="p-4 mb-2 bg-gray-100 rounded-lg">
                        <Text className="text-lg">{item.text}</Text>
                    </View>
                )}
            />
        </View>
    );
}
