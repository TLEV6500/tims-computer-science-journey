import type { UserConfig } from "vite";

export default {
	root: "./app",
	base: "./src/app/public",
	build: {
		outDir: "./public",
		emptyOutDir: true,
		assetsDir: "./assets",
	},
} satisfies UserConfig;
