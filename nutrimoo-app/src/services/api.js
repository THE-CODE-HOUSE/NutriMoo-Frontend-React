import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:8080'
});

api.interceptors.request.use(
    async (config) => {
        // Verifica se a requisição requer autenticação
        if (config.headers.requiresAuth !== false) {
            const user = UserStorage.getUser();
            if (user && user.token) {
                config.headers.Authorization = `Bearer ${user.token}`;
            }
        }

        // Remove a propriedade customizada para evitar interferir na requisição real
        delete config.headers.requiresAuth;

        return config;
    },
    (error) => {
        // Tratar erros de requisição aqui
        return Promise.reject(error);
    }
);

export default api;