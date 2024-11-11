import puppeteer from 'puppeteer';
import ejs from 'ejs';
import fs from "fs";
// Or import puppeteer from 'puppeteer-core';
import path from 'path';

export async function gerarPdf() {
  const filePath = path.join(__dirname, 'views', 'index.ejs');
  const publicDir = path.join(__dirname, '..', 'public');  // Caminho para a pasta public
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const fileName = `gerando-com-ejs-${Date.now()}.pdf`;
  const fileOutputPath = path.join(publicDir, fileName);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const html = await ejs.renderFile(filePath, {
    randomMessage: "Bem vindo",
    randomNumber: 24,
  })
  await page.setContent(html)
  //await page.goto ((`file://${filePath}`));
  // Saves the PDF to hn.pdf.
  await page.pdf({
    path: fileOutputPath,
    format: 'A4'
  });
  await browser.close();

  return fileName;
}

