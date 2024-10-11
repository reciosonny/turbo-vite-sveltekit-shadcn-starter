# Turborepo SvelteKit, Vite, shadcn-svelte starter kit

Turborepo starter kit for SvelteKit, alongside Vite and shadcn-svelte right out of the box.

## Getting Started

### Install dependencies

Once cloned, use the following command to install dependencies:

```sh
pnpm install
```

### Run the app

Use the following command to run the monorepo:

```sh
pnpm dev
```


## Adding UI components from shadcn

Use the pre-made script:

```sh
pnpm ui:add <component-name>
```

> This works just like the `shadcn/ui` CLI.


## What's inside?

This repo includes the following packages/apps:

### Apps and Packages

- 🌐 `web`: A [SvelteKit](https://kit.svelte.dev/) app
- 🌐 `docs`: A [Vite](https://vite.dev/) app
- 🎨 `@repo/ui`: A svelte component library powered by [**shadcn-svelte**](https://www.shadcn-svelte.com/) 🔥🚀
- ⚙️ `@repo/eslint-config`: `eslint` configurations (includes `svelte-eslint-parser` and `eslint-config-prettier`)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).


### Utilities

This Turborepo has some additional tools already setup for you:

- 🛠️ [TypeScript](https://www.typescriptlang.org/) for static type checking