import api from "./api";
import { AnimalStorage } from "../storage/storage";

async function addAnimal(tag, stage, breed, gender, weight,birthDate){
    try{
        const response = await api.post("/api/cattle/insert", {
            tag,
            stage,
            breed,
            gender,
            weight,
            birthDate
        });
    } catch (error){
        if (error.response && error.response.status === 409) {
            throw new Error("A tag já existe");
        } else {
            console.error("Erro ao Adicionar Animal", error);
        }
    }
}

async function updateAnimal(tag, stage, fertile, pregnant, weight, goal){
    try{
        const response = await api.put("/api/cattle/update",{
            tag,
            stage,
            fertile,
            pregnant,
            weight,
            goal
        })

    } catch (e){
        console.error("Erro ao Editar Animal", e);
    }
}

async function deleteAnimal(tag){
    try{
        const response = await api.delete("/api/cattle/delete",{
            data: {
                tag: tag
            },
            headers: {
                requiresAuth: true
            }
        });
    } catch (e) {
        console.error("Erro ao Adicionar Animal", e);
    }
}

async function fetchAndStoreAnimals() {
    try {
        const response = await api.get("/api/cattle/all");
        const animals = response.data;
        AnimalStorage.setAnimals(animals);
    } catch (e) {
        console.error("Erro ao buscar e armazenar animais", e);
    }
}


export { addAnimal, updateAnimal, fetchAndStoreAnimals, deleteAnimal };

