import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        # Desktop
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})

        await page.goto("http://localhost:3000")

        print("Checking Stories Layout again...")
        await page.locator("nav button", has_text="Stories").click()
        await page.wait_for_selector("text=Success Stories")

        # Debugging: check count
        count = await page.locator("div.bg-\\[\\#518E99\\]").count()
        print(f"Total cards: {count}")

        # Find the last card again
        kaynica_card = page.locator("div", has_text="Kaynica Malan").last.locator("xpath=..")
        classes = await kaynica_card.get_attribute("class")
        print(f"Last Card Classes: {classes}")

        if "lg:col-span-2" in classes:
             print("SUCCESS: Found centering class.")
        else:
             print("FAILURE: Centering class missing.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
