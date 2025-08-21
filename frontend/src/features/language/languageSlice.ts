import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../../i18n';

export type Language = 'uk' | 'en';

interface LanguageState {
    currentLanguage: Language;
}

const initialState: LanguageState = {
    currentLanguage: 'uk',
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<Language>) => {
            state.currentLanguage = action.payload;
            // Змінюємо мову в i18n
            i18n.changeLanguage(action.payload);
            // Зберігаємо в AsyncStorage
            AsyncStorage.setItem('selectedLanguage', action.payload);
        },
        initializeLanguage: (state, action: PayloadAction<Language>) => {
            state.currentLanguage = action.payload;
            i18n.changeLanguage(action.payload);
        },
    },
});

export const { setLanguage, initializeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
