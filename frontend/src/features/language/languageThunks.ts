import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Language, initializeLanguage } from './languageSlice';

export const loadSavedLanguage = createAsyncThunk('language/loadSaved', async (_, { dispatch }) => {
    try {
        const savedLanguage = await AsyncStorage.getItem('selectedLanguage');
        if (savedLanguage && (savedLanguage === 'uk' || savedLanguage === 'en')) {
            dispatch(initializeLanguage(savedLanguage as Language));
        }
    } catch (error) {
        console.error('Error loading saved language:', error);
    }
});
