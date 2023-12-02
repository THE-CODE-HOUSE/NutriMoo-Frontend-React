import api from "./api";
import { AnimalStorage } from "../storage/storage";

async function addAnimal(tag, stage, breed, gender, weight,birthDate){
    console.log(tag,stage,breed,gender,weight,birthDate);
    try{
        const response = await api.post("/api/cattle/insert", {
            tag,
            stage,
            breed,
            gender,
            weight,
            birthDate
        });
    } catch (e){
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

export { addAnimal, fetchAndStoreAnimals };