import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        # Desktop
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})

        await page.goto("http://localhost:3000")

        # 1. Verify Footer
        print("Checking Footer...")
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

        footer = page.locator("footer")
        bg_color = await footer.evaluate("el => window.getComputedStyle(el).backgroundColor")
        # #27445C is rgb(39, 68, 92)
        print(f"Footer BG: {bg_color}")
        if "39, 68, 92" in bg_color:
             print("SUCCESS: Footer background is Dark Blue.")
        else:
             print("FAILURE: Footer background mismatch.")

        # Check text color (white or slate-300)
        footer_brand = footer.locator("h2")
        text_color = await footer_brand.evaluate("el => window.getComputedStyle(el).color")
        if "255, 255, 255" in text_color:
             print("SUCCESS: Footer text is White.")
        else:
             print(f"FAILURE: Footer text color: {text_color}")

        # 2. Verify Stories Centering
        print("Checking Stories Layout...")
        await page.locator("nav button", has_text="Stories").click()
        await page.wait_for_selector("text=Success Stories")

        # Find the last card (Kaynica)
        kaynica_card = page.locator("div", has_text="Kaynica Malan").last.locator("xpath=..")
        classes = await kaynica_card.get_attribute("class")
        print(f"Last Card Classes: {classes}")

        if "lg:col-span-2" in classes and "lg:mx-auto" in classes:
             print("SUCCESS: Last card has centering classes.")
        else:
             print("FAILURE: Last card missing centering classes.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
