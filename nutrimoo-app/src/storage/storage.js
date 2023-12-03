import AsyncStorage from '@react-native-async-storage/async-storage';

const UserStorage = {
    setUser: async (user) => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(user));
        } catch (e) {
            // Tratar erro
        }
    },
    getUser: async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            return user ? JSON.parse(user) : null;
        } catch (e) {
            // Tratar erro
            return null;
        }
    },
    removeUser: async () => {
        try {
            await AsyncStorage.removeItem('user');
        } catch (e) {
            // Tratar erro
        }
    }
};

const AnimalStorage = {
    setAnimals: (animals) => {
        AsyncStorage.setItem('animals', JSON.stringify(animals));
    },
    getAnimals: async () => {
        try {
            const animals = await AsyncStorage.getItem('animals');
            return animals ? JSON.parse(animals) : [];
        } catch (e) {
            // Tratar erro
            return [];
        }
    }
};

const DietStorage = {
    setDiets: (diets) => {
        AsyncStorage.setItem('diets', JSON.stringify(diets));
    },
    getDiets: async () => {
        try {
            const diets = await AsyncStorage.getItem('diets');
            return diets ? JSON.parse(diets) : [];
        } catch (e) {
            // Tratar erro
            console.error('Erro ao recuperar dietas', e);
            return [];
        }
    }
};

export {UserStorage, AnimalStorage, DietStorage};