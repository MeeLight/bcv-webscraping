import { NodeJS } from 'node:process'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly PORT: string
      readonly BCV_URI: string
    }
  }
}
