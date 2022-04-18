import express, { NextFunction } from "express"
import { getENV } from "v2/Utils/getENV"
import { ArtsyRequest, ArtsyResponse } from "lib/middleware/artsyExpress"

export const app = express()

app.get(
  "/:short",
  (req: ArtsyRequest, res: ArtsyResponse, next: NextFunction) => {
    const short = req.params.short.toLowerCase()

    fetch(`${getENV("API_URL")}/api/v1/shortcut/${short}`, {
      headers: {
        "X-XAPP-TOKEN": getENV("ARTSY_XAPP_TOKEN"),
      },
    })
      .then(response => response.json())
      .then(data => {
        res.redirect(301, data.long)
      })
      .catch(next)
  }
)
