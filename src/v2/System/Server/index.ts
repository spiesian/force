import { Express } from "express"
import { app as shortcuts } from "./shortcuts"

export const initializeExpressApps = (app: Express) => {
  app.use(shortcuts)
}
