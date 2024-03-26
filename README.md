# Authentication Toolkit with Auth.js, Next.js, TailwindCSS & Prisma

![auth-toolkit](https://github.com/blaadrain/auth-toolkit/assets/96272057/1833253e-9f5a-410b-878d-09ce3e64d770)

Key Features:

- Next-auth v5 (Auth.js)
- Next.js 14 with server actions
- Credentials provider
- OAuth provider (login with Google & GitHub)
- Email verification
- Two factor verification
- Password change & reset functionality
- Sending emails using Resend
- User roles (Admin & User)
- Next.js middleware
- Next-auth session & callbacks
- API routes & server actions protection
- Form validation using react-hook-form & zod

### Prerequisites

**Node version 18.7.x**

### Cloning the repository

```shell
git clone https://github.com/blaadrain/auth-toolkit.git
```

### Install packages

```shell
pnpm i
```

### Setup .env file


```js
DATABASE_URL=

NEXTAUTH_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL=
```

### Setup prisma

```shell
pnpm dlx prisma generate
pnpm dlx prisma db push
```

### Start the app

```shell
pnpm run dev
```

## Available commands

Running commands with npm `pnpm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

