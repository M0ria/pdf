import puppeteer from 'puppeteer';
// Or import puppeteer from 'puppeteer-core';
import path from 'path';
export async function gerarPdf() { 

const filePath = path.resolve('src', 'index.html');

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto ((`file://${filePath}`));
// Saves the PDF to hn.pdf.
await page.pdf({
  path: 'hn.pdf',
});

await browser.close();
}

