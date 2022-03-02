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
    <div className="body">
      <div className="navbar">
        <a href="#home">
          <img src="/img/hand-and-foot.png" className="home" id="home" alt="hand and foot line drawing"></img>
        </a>
        <img src="/img/heart.png" className="deck" id="navImage" alt="ace of hearts"></img>
        <img src="/img/club.png" className="deck" id="navImage" alt="ace of clubs"></img>
        <a href="#news">Overview</a>
        <div className="dropdown">
          <button className="dropbtn">
            Log In
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">User Name</a>
            <a href="#">Password</a>
            <a href="#">Create Account</a>
          </div>
        </div>
      </div>

      <img src="/img/diamond.png" className="deck" id="diamonds" alt="ace of diamonds"></img>
      <h1>HAND AND FOOT</h1>
      <img src="/img/hand-and-foot.png" className="hand" id="logo" alt="hand and foot line drawing"></img>
      <img src="/img/spades.png" className="deck" id="spades" alt="ace of spades"></img>
    </div>
  );
}
