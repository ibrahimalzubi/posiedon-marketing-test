# Salient

Salient is a [Tailwind Plus](https://tailwindcss.com/plus) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, copy `.env.example` to `.env` and set your `DATABASE_URL` variable. You
can create the `users` table with:

```bash
psql $DATABASE_URL -f api/create_users_table.sql
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.
## Authentication

When you sign up, your credentials are stored in the PostgreSQL database and you are redirected to the sign in page. After signing in you'll land on the home page.


## API server (optional)

This project includes a small Express API in the `api/` directory. By default the Next.js
API routes handle registration and login. If you prefer running the separate Express
server, set `NEXT_PUBLIC_API_URL` to its URL and start it with the steps below:

1. Install the API dependencies:

```bash
cd api
npm install
```

2. Copy `api/.env.example` to `api/.env` and update the values.

3. Start the API server:

```bash
npm start
```

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation

