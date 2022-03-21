import * as React from "react";
import { Link } from "remix";
import { match } from "ts-pattern";
import PasswordRecovery from "~/components/pages/index/PasswordRecovery";
import BasePageLayout from "~/layouts/BasePageLayout";
import indexCss from "~/styles/index.css";
import { buildLinks } from "~/utils/pages";

export const links = buildLinks([{ rel: "stylesheet", href: indexCss }]);

const homeState = {
  displayPasswordModal: false,
};

type Action =
  | { type: "RECOVERY_TYPE_DETECTED" }
  | { type: "FORGOT_PASSWORD_MODAL_CLOSED" };

const reducer = (state: typeof homeState, action: Action) =>
  match(action)
    .with({ type: "RECOVERY_TYPE_DETECTED" }, () => ({
      ...state,
      displayPasswordModal: true,
    }))
    .with({ type: "FORGOT_PASSWORD_MODAL_CLOSED" }, () => ({
      ...state,
      displayPasswordModal: false,
    }))
    .exhaustive();

const Index = () => {
  const [state, dispatch] = React.useReducer(reducer, homeState);

  React.useEffect(() => {
    if (window.location.href.includes("&type=recovery")) {
      dispatch({ type: "RECOVERY_TYPE_DETECTED" });
    }
  }, []);

  return (
    <BasePageLayout>
      <div className="body">
        <div className="row">
          <div className="col s12 m12 l3 right-align" id="one">
            <img src="/img/hand-and-foot.png" className="hand"></img>
          </div>
          <div className="col s12 m12 l3 right-align" id="two">
            <img src="/img/diamond.png" className="deck" id="diamonds"></img>
          </div>
          <div className="col s12 m12 l6 center-align" id="three">
            <h1>HAND AND FOOT</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12 l6 center-align" id="four">
            <img src="/img/spades.png" className="deck" id="spades"></img>
          </div>
          <div className="col s12 m12 l6 left-align" id="five">
            <h3>Sign In</h3>
            <div className="input-field ">
              <i className="material-icons prefix">account_circle</i>
              <input
                name="email"
                placeholder="Username"
                id="icon_prefix"
                type="text"
                className="validate"
              ></input>
            </div>
            <div className="input-field ">
              <i className="material-icons prefix">security</i>
              <input
                name="password"
                placeholder="Password"
                id="icon_prefix"
                type="text"
                className="validate"
              ></input>
            </div>
            <a className="waves-effect waves-light white btn black-text">
              Submit
            </a>
            or
            <Link
              to="/create-account"
              prefetch="intent"
              className="waves-effect waves-light white btn black-text"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </div>
      <PasswordRecovery isOpen={state.displayPasswordModal} />
    </BasePageLayout>
  );
};

export default Index;
