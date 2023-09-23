import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import Html from "@kitajs/html";

const users = new Elysia({ prefix: "user" })
  .use(html())
  .decorate("Layout", ({ children }: Html.PropsWithChildren) => (
    <BaseHTML>
      <button>{children}</button>
    </BaseHTML>
  ))
  .get("/", ({ Layout }) => <Layout>Root</Layout>)
  .get("/sign-in", ({ Layout }) => <Layout>signIn</Layout>)
  .get("/sign-up", ({ Layout }) => <Layout>signUp</Layout>)
  .get("/profile", ({ Layout }) => <Layout>getProfile</Layout>);

const app = new Elysia().use(html()).use(users).listen(8080);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

function BaseHTML({ children }: Html.PropsWithChildren) {
  return (
    <html lang="fr">
      <head>
        <title>Hello World</title>
        <script
          src="https://unpkg.com/htmx.org@1.9.5"
          integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO"
          crossorigin="anonymous"
        />
        <script src="https://unpkg.com/hyperscript.org@0.9.11" />
        <script src="https://cdn.tailwindcss.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
