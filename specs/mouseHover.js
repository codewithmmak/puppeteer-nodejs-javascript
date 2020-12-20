const puppeteer = require('puppeteer');

async function mouseHover() {

    const browser = await puppeteer.launch({ args: ['--start-fullscreen'] });
    await console.log('Launching test');

    const page = await browser.newPage();

    await page.goto('https://soundcloud.com/', { waitUntil: 'networkidle2' });
    await console.log('User navigated to site');

    await page.hover('.playableTile__artwork');

    await page.screenshot({
        path: './screenshots/mouseHover.png'
    });
    await console.log('Page screenshot taken');

    await browser.close();
    await console.log('Browser closed');

}

mouseHover();