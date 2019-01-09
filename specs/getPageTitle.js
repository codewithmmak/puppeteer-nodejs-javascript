const puppeteer = require('puppeteer');

async function getPageTitle() {

    const browser = await puppeteer.launch();
    await console.log('Launching test');

    const page = await browser.newPage();

    await page.goto('https://news.ycombinator.com/news');
    await console.log('User navigated to site');

    const getTitle = await page.title();
    await console.log('Page title is: ', getTitle);

    await browser.close();
    await console.log('Browser closed');

}

getPageTitle();