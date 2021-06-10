import { createApp } from './app/app'
import * as Env from './environment'

const app = createApp()

app.listen(Env.PORT, () => {
    console.log(`Listening on port: ${Env.PORT}`)
})
