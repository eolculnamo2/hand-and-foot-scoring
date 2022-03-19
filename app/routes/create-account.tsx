import { LinksFunction } from "remix";
import BasePageLayout from "~/layouts/BasePageLayout";
import { buildLinks } from "~/utils/pages";

export const links: LinksFunction = buildLinks();
const CreateAccount = () => (
  <BasePageLayout>
   <div className="center-align row">
       
       <div className="col s6 l8">
           <div className="input-field ">
               <input name="newFirstName" placeholder="First Name" id="first_name" type="text" className="validate" />


               <input name="newLastName" placeholder="Last Name" id="last_name" type="text" className="validate" />


               <input name="nickname" placeholder="Username" id="nickname" type="text" className="validate" />


               <input name="email" placeholder="Email" id="email" type="text" className="validate" />


               <input name="password" placeholder="Password" id="password" type="text" className="validate" />

           </div>
           <button className="submit">
               Submit
           </button>
       </div>
       <div className="col s6 l4">
           <img src="/img/hand-and-foot.png" className="logo"></img>
       </div>
   </div>
  </BasePageLayout>
);

export default CreateAccount;
