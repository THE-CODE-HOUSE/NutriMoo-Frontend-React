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

export { addAnimal };