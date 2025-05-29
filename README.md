# Getting Started

## Clone this repo to your local

```bash
git clone https://github.com/besaoct/school-nextjs-seo-template.git
```

## Installation

Install the project dependencies. If you encounter issues, try using the `--legacy-peer-deps` flag:

```bash
npm install --legacy-peer-deps
```

## Development

Start the development server with:

```bash
npm run dev
```

## Production Static Build

Generate a static production build:

```bash
npm run build
```

This command creates an `out` directory containing the production-ready static site. It also automatically generates `sitemap.xml` and `robots.txt` files based on the configuration in `seo/constants.ts`, so you do not need to create them manually.

### Serving the Production Build Locally

To serve the static production build locally, run:

```bash
npm run static-start
```

## Standard Build

To perform a standard build, update your `next.config.mjs` as follows:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',  //* remove this line or keep it commented for a standard build
    trailingSlash: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
}

export default nextConfig
```

Then build and start the application (for production):

```bash
npm run build
npm run start
```

## Customization

To update sitemap routes or initial metadata, edit the `seo/constants.ts` file.

## Demo

[Click here: school-nextjs-seo-template.vercel.app](https://school-nextjs-seo-template.vercel.app)
