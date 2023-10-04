/// <reference types="@kitajs/html/htmx.d.ts" />

import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import Html from "@kitajs/html";
import staticPlugin from "@elysiajs/static";

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get("/", () => <BaseHTML>Hello World !</BaseHTML>)
  .get("/get", () => "omg")
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

function BaseHTML({ children }: Html.PropsWithChildren) {
  return (
    <html lang="fr">
      <head>
        <title>Hello World</title>
        <link rel="stylesheet" href="/public/styles.css" />
        <script src="/public/htmx.min.js" />
        <script src="/public/hyperscript.min.js" />
        <script src="/public/script.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
