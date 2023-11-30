import api from "./api";
import { UserStorage } from "../storage/storage";

const roleMapper = {
    'produtor': 'PRODUCER',
    'gerente': 'MANAGER',
    'trabalhador': 'WORKER',
    'veterinário': 'VET',
    'nutricionista': 'NUTRITIONIST',
    'admin': 'ADMIN'
};

function mapRoleToConstant(roleInPortuguese) {
    return roleMapper[roleInPortuguese.toLowerCase()] || null;
}

//Essa função envia para a api o email e a senha do usuario
//e retorna o seu JWT que é salvo no async storage
async function submitLogin(email, password) {
  try {
    //Aqui a rota de login é chamada por axios
    const response = await api.post(
      "/auth/login",
      { email, password },
      {
        headers: { requiresAuth: false },
      }
    );
    //Aqui o json que vem da api é guardada no async storage
    UserStorage.setUser(response.data);
  } catch (error) {
      throw new Error(error);
  }
}

//Essa função envia para a api os dados necessarios para o registro de um novo usuario
async function submitRegister(email, password, role, name, department) {
    console.log(email, password, role, name, department)
  try {
    //Aqui a role é alterada para as caracteristicas da role da api
    const mappedRole = mapRoleToConstant(role);
    //console.log(mappedRole)
    role = mappedRole

    //Aqui a rota de registrar é chamada por axios
    const response = await api.post("/auth/register", {
      email,
      password,
      role,
      name,
      department,
    });

    //Aqui o json que vem da api é guardada no async storage
  } catch (error) {
    console.error("Erro no login", error);
  }
}

export { submitLogin, submitRegister};
