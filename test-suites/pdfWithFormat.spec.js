const puppeteer = require('puppeteer');

async function pdfWithFormat() {

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto('https://scrapethissite.com/pages/forms/');
    await console.log('User navigated to site');

    await page.pdf({
        path: './pdf/HockeyTeams.pdf', format: 'A4'
    });
    await console.log('A4 PDF page taken');

    await browser.close();
    await console.log('Browser closed');

}

pdfWithFormat();