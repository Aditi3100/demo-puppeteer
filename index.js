const puppeteer = require('puppeteer');

async function start() {
	const browser = await puppeteer.launch({
	 	headless: false
 	})
  	const page = await browser.newPage()
	await page.goto('https://www.gmail.com')
	await page.setViewport({ width: 1280, height: 800 })

	const navigatiomPromise=page.waitForNavigation()

	await page.waitForSelector('#identifierId')
	await page.click('#identifierId')

	await page.keyboard.type('dwaipayanray1@gmail.com')
	await page.click('#identifierNext')

	await navigatiomPromise

}

start();
