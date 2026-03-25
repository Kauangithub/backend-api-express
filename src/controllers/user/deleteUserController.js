import { deleteUser } from "../../models/userModel.js"

export async function deleteUserController(req,res) {
    const {id} = req.params;

    const result =  await deleteUser(+id);
    if(!result) {
        res.json({message: "Usuário não encontrado", user: result})
    }

    return res.json({message: "Usuário deletado com sucesso", user: result})
}