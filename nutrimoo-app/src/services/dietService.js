import api from "./api";
import { DietStorage } from "../storage/storage";

//Envia o stage e o goal para api, caso existe uma dieta para tal filtro apenas retorna a mesma
//Caso não exista é gerado uma nova dieta para tal filtro e retorna a mesma
async function fetchAndStoreDiets(stage, goal) {
  try {
    const response = await api.post(
      "/api/diet/insert",
      { stage, goal },
      { headers: { requiresAuth: false } }
    );
    const diets = response;
    DietStorage.setDiets(diets.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("Resultado não encontrado.");
    } else {
      console.error("Erro criar dieta", error);
    }
  }
}

export { fetchAndStoreDiets };
