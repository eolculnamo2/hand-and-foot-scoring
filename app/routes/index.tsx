import homeCss from "~/styles/home.css";

export function links() {
  return [
    { rel: "stylesheet", href: homeCss },
    { rel: "preconnect", href: "https://fonts.googleapis.com/" },
    { rel: "preconnect", href: "https://fonts.gstatic.com/" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" },
  ];
}
export default function Index() {
  return (
    <div className="body" style={{ fontFamily: "Varela Round, sans-serif", lineHeight: "1.6" }}>
     
{/*       
      <li>
        <a target="_blank" href="https://remix.run/tutorials/blog" rel="noreferrer">
          Log In
        </a>
      </li>
      <li>
        <a target="_blank" href="https://remix.run/tutorials/jokes" rel="noreferrer">
          Register
        </a>
      </li>
      <li>
        <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
          Overview
        </a>
      </li> */}


      <img src="/img/diamond.png" className="deck" id="diamonds"></img>
      <img src="/img/hand-and-foot.png" className="hand" id="topHand"></img>
      <h1>HAND AND FOOT</h1>
      <img src="/img/hand-and-foot.png" className="hand" id="bottomHand"></img>
      <img src="/img/spades.png" className="deck" id="spades"></img>
    </div>
  );
}
