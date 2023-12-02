import api from "./api";
import { AnimalStorage } from "../storage/storage";
import { ToastAndroid } from "react-native";

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
    } catch (error){
        if (error.response && error.response.status === 409) {
            throw new Error("A tag já existe");
        } else {
            console.error("Erro ao Adicionar Animal", error);
        }
    }
}

async function updateAnimal(tag, stage, fertile, pregnant, weight, goal){
    console.log(tag, stage, fertile, pregnant, weight, goal);
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

export { addAnimal, updateAnimal };