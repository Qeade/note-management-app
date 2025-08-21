import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setLanguage, Language } from '../features/language/languageSlice';

const LanguageSwitcher: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const currentLanguage = useAppSelector((state) => state.language.currentLanguage);

    const handleLanguageChange = (language: Language) => {
        dispatch(setLanguage(language));
    };

    return (
        <View className="flex-row items-center bg-white rounded-full p-1 shadow-sm">
            <TouchableOpacity
                className={`px-3 py-1.5 rounded-full ${
                    currentLanguage === 'uk' ? 'bg-gray-500' : 'bg-transparent'
                }`}
                onPress={() => handleLanguageChange('uk')}
            >
                <Text
                    className={`text-xs font-medium ${
                        currentLanguage === 'uk' ? 'text-white' : 'text-gray-600'
                    }`}
                >
                    УКР
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                className={`px-3 py-1.5 rounded-full ${
                    currentLanguage === 'en' ? 'bg-gray-500' : 'bg-transparent'
                }`}
                onPress={() => handleLanguageChange('en')}
            >
                <Text
                    className={`text-xs font-medium ${
                        currentLanguage === 'en' ? 'text-white' : 'text-gray-600'
                    }`}
                >
                    ENG
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default LanguageSwitcher;
