import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || 'http://localhost:3000';
const screenshotDir = join(__dirname, 'temporary screenshots');

mkdirSync(screenshotDir, { recursive: true });

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const outputPath = join(screenshotDir, `screenshot-${timestamp}.png`);

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2' });
await page.screenshot({ path: outputPath, fullPage: true });
await browser.close();

console.log(`Screenshot saved to: ${outputPath}`);
