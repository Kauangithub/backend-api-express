import { getPubli } from "../../models/publiModel.js";

export async function getPubliController(req,res) {
    const result = await getPubli();
    res.json({message: "Publicações puxadas com sucesso!", publi: result})
}