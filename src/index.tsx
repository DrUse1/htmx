import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import Html from "@kitajs/html";

type Component = {
  (props: Html.PropsWithChildren): string;
};

const users = (Layout: Component) => {
  return new Elysia({ prefix: "user" })
    .get("/", () => <Layout>Root</Layout>)
    .get("/sign-in", () => <Layout>signIn</Layout>)
    .get("/sign-up", () => <Layout>signUp</Layout>)
    .get("/profile", () => <Layout>getProfile</Layout>);
};

const app = new Elysia()
  .use(html())
  .use(users(BaseHTML))
  .get("/", () => <div>Hello</div>)
  .listen(8080);

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
