import { updatePubli } from "../../models/publiModel.js"

export async function updatePubliController(req,res) {
    const { id } = req.params;
    const publi = req.body;
    const result = await updatePubli(+id, publi);
    if(!result) {
        res.json({message: "Publicação não encontrada", publi: result})
    }
    return res.json({message: "Publicação atualizada com sucesso", publi: result})
}