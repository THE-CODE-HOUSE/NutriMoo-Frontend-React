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
    console.log(diets.data)
    DietStorage.setDiets(diets.data);
  } catch (e) {
    console.error("Erro ao buscar e armazenar animais", e);
  }
}

export { fetchAndStoreDiets };
