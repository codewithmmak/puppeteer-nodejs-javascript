const puppeteer = require('puppeteer');

async function getPageScreenshot() {

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto('https://scrapethissite.com/pages/forms/');
    await console.log('User navigated to site');

    await page.screenshot({
        path: './screenshots/HockeyTeams.png'
    });
    await console.log('Page screenshot taken');

    await browser.close();
    await console.log('Browser closed');

}

getPageScreenshot();