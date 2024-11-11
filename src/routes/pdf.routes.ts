import {Router, Request, Response } from "express"
import { gerarPdf } from "../geracao"

const router = Router()
router.
post("/pdf", async(req: Request, res: Response) => {
    await gerarPdf() 
    res.sendStatus (200)
})
.get("/views", (req: Request, res: Response) => {
    res.render('index.ejs');
})
.get('/generate-pdf', async (req: Request, res: Response) => {
    try {
      // Gera o PDF e obtém o nome do arquivo
      const fileName = await gerarPdf();
  
      // Cria o link para acessar o PDF gerado
      const pdfUrl = `${req.protocol}://${req.get('host')}/public/${fileName}`;
  
      res.send(`PDF gerado! <a>href="${pdfUrl}" target="_blank">Clique aqui para abrir o PDF</a>`);
    } catch (err: unknown) {
      // Verifica se o erro é uma instância de Error e acessa a mensagem de erro
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Erro desconhecido");
      }
      res.status(500).send('Erro ao gerar o PDF');
    }
  });

export {router}
    
