import api from "./api";
import { DietStorage } from "../storage/storage";

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
