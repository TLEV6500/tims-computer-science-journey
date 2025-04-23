/// <reference lib="deno.ns" />
import { Application } from "@oak/oak"
import { Router } from "@oak/oak"
// import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { Eta } from "https://deno.land/x/eta@v3.5.0/src/index.ts";
import { error, log } from "node:console";
// import { viewEngine, oakAdapter, etaEngine } from "https://deno.land/x/view_engine/mod.ts"

const app = new Application();
const eta = new Eta({ views: "./src/app/views" });
const port = 8080;
// app.use(oakCors())

// app.use(viewEngine(oakAdapter, etaEngine, {
//     viewRoot: "./src/app/views"
// }))

const router = new Router();

router.get("/", (ctx, _next) => {
    ctx.response.body = eta.render("default/index.eta", { name: "Tim" })
    ctx.response.type = "text/html";
    // ctx.response.headers.set("Content-Type", 'text/html');
    log("rendered default")
})

router.get("/matrices", (ctx, _next) => {
    ctx.response.body = eta.render("MatrixRowOperations/index.eta", {})
    ctx.response.type = "text/html";
    // ctx.response.headers.append("")
    log("rendered matrix")
})


app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx, next) => {
    await ctx.send({
        root: `${Deno.cwd()}/src/app/public`,
        contentTypes: {
            ".css": 'text/css',
            ".ico": 'image/x-icon'
        }
    })
    await next();
});

app.addEventListener('listen', () => {
    console.log("Server running at http://localhost:" + port);
})
app.addEventListener('error', () => {
    error("Server Error")
})

await app.listen({
    port
});

