import { createPubli } from "../../models/publiModel.js";

export async function createPubliController(req,res) {
    const publi = req.body;
    console.log("Dados recebidos para criação de publicação", publi);

    const result = await createPubli(publi)

    res.json({message: "Publicação criada com sucesso", publi: result})
}