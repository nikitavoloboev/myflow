import { model, string } from "ronin/schema"

export const UserModel = model({
  slug: "user",
  fields: {
    name: string(),
    email: string(),
    password: string(),
  },
})
