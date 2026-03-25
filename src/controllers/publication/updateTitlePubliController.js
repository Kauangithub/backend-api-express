import { updatePubli } from "../../models/publiModel.js"

export async function updateTitlePubliController(req,res) {
        const { id } = req.params;
    const publi = req.body;
    const result = await updatePubli(+id, publi);
    if(!result) {
        res.json({message: "Publicação não encontrada", publi: result})
    }
    return res.json({message: "Título atualizado com sucesso", publi: result})
}