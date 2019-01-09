const puppeteer = require('puppeteer');

async function getElementText() {

    const browser = await puppeteer.launch();
    await console.log('Launching test');

    const page = await browser.newPage();

    await page.goto('https://news.ycombinator.com/news');
    await console.log('User navigated to site');

    const getText = await page.$eval('.hnname > a', el => el.innerText)
    await console.log('Text is: ', getText);

    await browser.close();
    await console.log('Browser closed');

}

getElementText();