import { LinksFunction } from "remix";
import globalCss from "~/styles/global.css";
import navCss from "~/styles/nav.css";

export const buildLinks =
  (links?: ReturnType<LinksFunction>): LinksFunction =>
  () =>
    [
      { rel: "stylesheet", href: globalCss },
      { rel: "stylesheet", href: navCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com/" },
      { rel: "preconnect", href: "https://fonts.gstatic.com/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Varela+Round&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
      },
      ...(links ?? []),
    ];
