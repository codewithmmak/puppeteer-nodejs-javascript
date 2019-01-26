const puppeteer = require('puppeteer');

async function fullScreenMode() {

    const browser = await puppeteer.launch({ args: ['--start-fullscreen'] });

    const page = await browser.newPage();

    await page.goto('https://scrapethissite.com/pages/forms/');
    await console.log('User navigated to site');

    await page.screenshot({
        path: './screenshots/FullScreenModeScreenShot.png'
    });
    await console.log('Page screenshot taken');

    await browser.close();
    await console.log('Browser closed');

}

fullScreenMode();