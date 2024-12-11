import type { UserConfig } from "vite";

export default {
	root: "./",
	base: "/discrete-mathematics/",
	build: {
		outDir: "./public",
		emptyOutDir: true,
		assetsDir: "./assets",
	},
} satisfies UserConfig;
