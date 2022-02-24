import { LinksFunction } from "remix";
import globalCss from "~/styles/global.css";

export const buildLinks =
  (links?: ReturnType<LinksFunction>): LinksFunction =>
  () =>
    [
      { rel: "stylesheet", href: globalCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com/" },
      { rel: "preconnect", href: "https://fonts.gstatic.com/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Varela+Round&display=swap",
      },
      ...(links ?? []),
    ];
