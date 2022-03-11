import { LinksFunction } from "remix";
import BasePageLayout from "~/layouts/BasePageLayout";
import { buildLinks } from "~/utils/pages";

export const links: LinksFunction = buildLinks();
const CreateAccount = () => (
  <BasePageLayout>
    <div className="center-align phils-house">
      <div className="col s6">
      <img src="/img/hand-and-foot.png" className="hand"></img>
      </div>
      <div className="col s6 phils-form">
        <div className="input-field ">
          <input name="newFirstName" placeholder="First Name" id="first_name" type="text" className="validate" />


          <input name="newLastName"  placeholder="Last Name" id="last_name" type="text" className="validate" />


          <input name="nickname" placeholder="Username" id="nickname" type="text" className="validate" />


          <input name="email" placeholder="Email" id="email" type="text" className="validate" />


          <input name="password" placeholder="Password" id="password" type="text" className="validate" />

        </div>
        <button className="submit">
          Submit
        </button>
      </div>
    </div>
  </BasePageLayout>
);

export default CreateAccount;
