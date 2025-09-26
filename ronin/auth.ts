// not sure if correct place

import { betterAuth } from "better-auth"
import { ronin } from "blade-better-auth"

const auth = betterAuth({
  database: ronin(),
})
