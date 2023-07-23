import { Request, Response } from 'express'
import { env } from 'process'

// Scraping
import { launch } from 'puppeteer'

// Utilities
import { generateJson } from './../utilities/fs'

export async function getBcvDollarPrice(
  _: Request,
  res: Response
): Promise<void> {
  try {
    const browser = await launch({ headless: 'new' })
    const page = await browser.newPage()
    await page.goto(env.BCV_URI)

    const bcvPrice = await page.evaluate(async (): Promise<string> => {
      const value = document.querySelectorAll(
        'div[class="col-sm-6 col-xs-6 centrado"]>strong'
      )[4].textContent!

      return value.trim().substring(0, 7).replace(',', '.')
    })

    await browser.close()

    await generateJson(bcvPrice) // Lol

    res.status(200).json({
      msg: `Price of the dollar in BCV: ${bcvPrice} Bs`,
      price: bcvPrice
    })
  } catch (error: any) {
    console.error(error.message) // Lol
  }
}
