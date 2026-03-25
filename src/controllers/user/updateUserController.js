import { updateUser } from "../../models/userModel.js"

export async function updateUserController(req, res) {
    const { id } = req.params;
    const user = req.body;
    const result = await updateUser(+id, user);
    if (!result) {
        res.json({ message: "Usuário não encontrado", user: result })
    }
    return res.json({ message: "Usuário atualizado com sucesso", user: result })

}