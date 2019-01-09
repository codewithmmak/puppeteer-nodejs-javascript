const puppeteer = require('puppeteer');

async function keyboard() {

    const browser = await puppeteer.launch();
    await console.log('Launching test');

    const page = await browser.newPage();

    await page.goto('https://soundcloud.com/');
    await console.log('User navigated to site');

    await page.hover('.playableTile__artwork');

    await page.screenshot({
        path: './screenshots/Keyboard.png'
    });
    await console.log('Page screenshot taken');

    await browser.close();
    await console.log('Browser closed');

}

keyboard();