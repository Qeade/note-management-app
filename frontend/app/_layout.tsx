import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import '../styles/global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <Stack />
            </Provider>
        </SafeAreaProvider>
    );
}
