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
    }
};

export {UserStorage};