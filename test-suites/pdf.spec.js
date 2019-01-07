const puppeteer = require('puppeteer');

async function createPdfPage() {

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto('https://scrapethissite.com/pages/forms/');
    await console.log('User navigated to site');

    await page.pdf({
        path: './pdf/HockeyTeams.pdf'
    });
    await console.log('Page pdf taken');

    await browser.close();
    await console.log('Browser closed');

}

createPdfPage();