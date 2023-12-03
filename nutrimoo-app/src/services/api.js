import axios from 'axios';
import {UserStorage} from "../storage/storage";

const api = axios.create({
    baseURL: 'http://10.0.2.2:8080',
    timeout: 10000,
});

api.interceptors.request.use(
    async (config) => {
        // Verifica se a requisição requer autenticação
        if (config.headers.requiresAuth !== false) {
            const user = await UserStorage.getUser();
            if (user) {
                config.headers.Authorization = `Bearer ${user}`;
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