import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    print(f"Current working directory: {os.getcwd()}")
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Intercept network requests
        await page.route("**/leaflet.css", lambda route: route.fulfill(path="leaflet.css"))
        await page.route("**/leaflet.js", lambda route: route.fulfill(path="leaflet.js"))
        await page.route("**/cities.json", lambda route: route.fulfill(path="cities.json"))

        # Read the HTML file
        with open('index.html', 'r') as f:
            html_content = f.read()

        # Set the HTML content of the page
        await page.set_content(html_content)

        # Wait for the map container to be visible
        await page.wait_for_selector('#map .leaflet-container', timeout=15000)

        # Take a screenshot
        await page.screenshot(path='jules-scratch/verification/verification.png')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
