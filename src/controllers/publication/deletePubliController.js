import { deletePubli } from "../../models/publiModel.js"

export async  function deletePubliController(req,res) {
    const id = req.params.id;
    const result =  await deletePubli(id);
    if(!result) {
        res.json({message: "Publicação não encontrada", publi: result})
    }
}