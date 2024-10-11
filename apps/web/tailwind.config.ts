import type { Config } from 'tailwindcss';
import presets from '@repo/ui/tailwind.config.ts';

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/ui/src/**/*.{html,js,svelte,ts}'],
	presets: [presets]
};

export default config;
