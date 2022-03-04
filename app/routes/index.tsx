import BasePageLayout from "~/layouts/BasePageLayout";
import indexCss from "~/styles/index.css";
import { buildLinks } from "~/utils/pages";

export const links = buildLinks([{ rel: "stylesheet", href: indexCss }]);

const Index = () => {
  return (
    <BasePageLayout>
      <div className="body">
        <div className="row">
          <div className="col s12 m12 l6 right-align">
            <img src="/img/diamond.png" className="deck" id="diamonds"></img>
          </div>
          <div className="col s12 m12 l6 left-align">
            <h1>HAND AND FOOT</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12 l6 center-align">
            <img src="/img/spades.png" className="deck" id="spades"></img>
          </div>
          <div className="col s12 m12 l6 left-align">
            <img src="/img/hand-and-foot.png" className="hand"></img>
          </div>
        </div>
      </div>
    </BasePageLayout>
  );
};

export default Index;
