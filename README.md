# Overview

This is a [Next.js](https://nextjs.org/) project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), that allows a user to display product widgets as well as update their settings.

1. Explore the [Figma](https://www.figma.com/file/EpzAE594mkDkMvg09WTqpb/Frontend-task?node-id=0%3A1) prototype for the UI design.

2. To fetch product widget data, use the following [API](https://api.mocki.io/v2/016d11e8/product-widgets) endpoint.

### Features:

- Easy to customize.
- Fully Responsive.
- SEO friendly
- Prettier, ESLint, Husky and Lint-staged integration.

<div align="center">
<span>Live at: 
<a href="https://greenspark-task.vercel.app/">https://greenspark-task.vercel.app/</a>
</div>

## :construction_worker_man: Build With

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)

## :rocket: Running locally

1. Clone this repo
   ```bash
   git clone https://github.com/ysfBenali/greenspark-task && cd greenspark-task
   ```
2. You will need to use the environment variables defined in [.env.example](https://github.com/ysfBenali/greenspark-task/blob/main/.env.example).
   ```bash
   cp .env.example .env.local
   ```
3. Run `nvm use` to use the correct node version defined in `.nvmrc`.
4. Finally, run the following commands to start the development server:
   ```bash
   npm i && npm run dev
   ```

## :monocle_face: What's inside?

A quick look at the top-level files and directories :

```bash
├── .husky                      # Husky config (pre-commit hooks, ...)
├── node_modules
│
├── public
│   └── assets                  # Assets
│       ├── favicon
│       ├── icons
│       └── thumbnail
│
├── src
│   ├── app
│   │   ├── error.tsx           # Handle unexpected runtime errors (React Error Boundary)
│   │   ├── globals.css         # Global styles (css variables, colors, classes, ...)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components
│   │   ├── productWidgetList.tsx
│   │   ├── productWidget.tsx
│   │   └── ui                   # Core components
│   │       ├── checkbox.tsx
│   │       ├── switch.tsx
│   │       └── tooltip.tsx
│   └── lib
│       └── utils.ts            # Utils functions
│
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js 			# Tailwind config
└── tsconfig.json               # Typescript config
```

## :pushpin: Todo

- [ ] Write appropriate tests.
