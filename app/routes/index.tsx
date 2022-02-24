import BasePageLayout from "~/layouts/BasePageLayout";
import homeCss from "~/styles/home.css";
import { buildLinks } from "~/utils/pages";

export const links = buildLinks([{ rel: "stylesheet", href: homeCss }]);

const Index = () => {
  return (
    <BasePageLayout>
      <div className="body">
        <img src="/img/diamond.png" className="deck" id="diamonds"></img>
        <img src="/img/hand-and-foot.png" className="hand" id="topHand"></img>
        <h1>HAND AND FOOT</h1>
        <img
          src="/img/hand-and-foot.png"
          className="hand"
          id="bottomHand"
        ></img>
        <img src="/img/spades.png" className="deck" id="spades"></img>
      </div>
    </BasePageLayout>
  );
};

export default Index;
