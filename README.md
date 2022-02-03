# Medium Clone using NextJS, TailwindCSS and Sanity

This is a clone of Medium Blog using [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It also uses [Sanity](https://www.sanity.io/) as the cms.

## Usage

To start the application you need to have the following environment variables (or .env.local file)
* NEXT_PUBLIC_SANITY_DATASET -> Sanity dataset name, by default its set to 'production'
* NEXT_PUBLIC_SANITY_PROJECT_ID -> Sanity Project ID
* SANITY_API_TOKEN -> Sanity Project API Token

Once you have this set up, you should be able to connext NextJS with Sanity.

The posts are created via Sanity
