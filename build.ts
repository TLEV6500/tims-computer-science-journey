// build.ts
import * as esbuild from "esbuild";

// Configuration
const ctx = await esbuild.context({
  entryPoints: ["./src/app/ts/main.ts"],
  outfile: "./src/app/public/script.js",
  bundle: true,      // Combine imports
  minify: true,      // Minify for production
  format: "esm",     // ES Modules (modern browsers)
  target: "es2020",  // Browser compatibility
});

// Build once
await ctx.rebuild();

// Watch mode (rebuild on changes)
if (Deno.args.includes("--watch")) {
  await ctx.watch();
  console.log("Watching for changes...");
}

// Cleanup
ctx.dispose();