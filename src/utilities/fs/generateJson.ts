import { writeFile } from 'fs/promises'

type Price = string

export async function generateJson(price: Price): Promise<void> {
  await writeFile(
    './src/data/dollarPrice.json',
    JSON.stringify({ price }, null, 2)
  )
}
