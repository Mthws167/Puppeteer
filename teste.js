const puppeteer = require('puppeteer');
const readline = require('readline-sync'); // Importe a biblioteca readline

async function test() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const URL = `https://www.kawasaki.com/en-us/motorcycle/ninja/supersport/ninja-zx-4rr/2023-ninja-zx-4rr-krt-edition?cm_re=MPP-_-NINJA%C2%AEZX%E2%84%A2-4RR:MODELS-_-VIEWSPECSDETAILS`;
    await page.goto(URL);

    // Capture a tela e salve na área de trabalho
    await page.screenshot({ path: `C:\\Users\\Aluno\\Desktop\\screenshot.png` }); // Altere o caminho conforme necessário

    await browser.close();
}

test();
