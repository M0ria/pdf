import {Router, Request, Response } from "express"
import { gerarPdf } from "../geracao"

const router = Router()
router.
post("/pdf", async(req: Request, res: Response) => {
    await gerarPdf() 
    res.sendStatus (200)
}) 
export {router}