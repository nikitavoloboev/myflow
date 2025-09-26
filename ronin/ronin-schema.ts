import { blob, boolean, date, link, model, string } from "blade/schema"

export const User = model({
  slug: "user",
  fields: {
    email: string({ required: true, unique: true }),
    emailVerified: boolean({ required: true }),
    image: blob(),
    name: string({ required: true }),
  },
})

export const Session = model({
  slug: "session",
  fields: {
    expiresAt: date({ required: true }),
    ipAddress: string(),
    token: string({ required: true, unique: true }),
    userId: link({ required: true, target: "user" }),
    userAgent: string(),
  },
})

export const Account = model({
  slug: "account",
  pluralSlug: "accounts",
  fields: {
    accessToken: string(),
    accessTokenExpiresAt: date(),
    accountId: string({ required: true }),
    idToken: string(),
    password: string(),
    providerId: string({ required: true }),
    refreshToken: string(),
    refreshTokenExpiresAt: date(),
    scope: string(),
    userId: link({ required: true, target: "user" }),
  },
})

export const Verification = model({
  slug: "verification",
  pluralSlug: "verifications",
  fields: {
    expiresAt: date({ required: true }),
    identifier: string({ required: true }),
    value: string({ required: true }),
  },
})
