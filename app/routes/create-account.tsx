import { ActionFunction, Form, LinksFunction, redirect } from "remix";
import BasePageLayout from "~/layouts/BasePageLayout";
import { registerNewUser } from "~/server/services/register.server";
import { buildLinks } from "~/utils/pages";
import {
  assertEmail,
  assertType,
  minLength,
  throwByStatus,
} from "~/utils/validations.server";

export const links: LinksFunction = buildLinks();

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const emailForm = form.get("email");
  const passwordForm = form.get("password");
  const firstNameForm = form.get("newFirstName");
  const lastNameForm = form.get("newLastName");
  const nickNameForm = form.get("nickname");

  const emailResult = assertType<string>(emailForm, "string");
  const passwordResult = assertType<string>(passwordForm, "string");
  const firstNameResult = assertType<string>(firstNameForm, "string");
  const lastNameResult = assertType<string>(lastNameForm, "string");
  const nickNameResult = assertType<string>(nickNameForm, "string");

  if (emailResult.res === "err") {
    throwByStatus(400, "Email must be of type string");
    return null;
  }
  if (passwordResult.res === "err") {
    throwByStatus(400, "Password must be of type string");
    return null;
  }
  if (!assertEmail(emailResult.payload)) {
    throwByStatus(400, "Email must be properly formatted");
    return null;
  }
  if (!minLength(passwordResult.payload, 6)) {
    throwByStatus(400, "Password must have at least 6 characters");
    return null;
  }
  if (firstNameResult.res === "err") {
    throwByStatus(400, "First name must be of type string");
    return null;
  }
  if (lastNameResult.res === "err") {
    throwByStatus(400, "Last name must be of type string");
    return null;
  }
  if (nickNameResult.res === "err") {
    throwByStatus(400, "Nickname must be of type string");
    return null;
  }

  const registerResult = await registerNewUser(
    emailResult.payload,
    passwordResult.payload,
    firstNameResult.payload,
    lastNameResult.payload,
    nickNameResult.payload
  );

  // todo handle error case better
  if (registerResult.res === "err") {
    console.error(registerResult.payload);
    return null;
  }
  return redirect("/dashboard");
};

const CreateAccount = () => (
  <BasePageLayout>
    <div className="center-align phils-house">
      <div className="col s6 phils-form">
        <Form method="post">
          <div className="input-field ">
            <input
              name="newFirstName"
              placeholder="First Name"
              id="first_name"
              type="text"
              className="validate"
            />
            <input
              name="newLastName"
              placeholder="Last Name"
              id="last_name"
              type="text"
              className="validate"
            />
            <input
              name="nickname"
              placeholder="Username"
              id="nickname"
              type="text"
              className="validate"
            />
            <input
              name="email"
              placeholder="Email"
              id="email"
              type="text"
              className="validate"
            />
            <input
              name="password"
              placeholder="Password"
              id="password"
              type="password"
              className="validate"
            />
          </div>
          <button className="submit">Create Account</button>
        </Form>
      </div>
      <div className="col s6 l4">
        <img src="/img/hand-and-foot.png" className="logo"></img>
      </div>
    </div>
  </BasePageLayout>
);

export default CreateAccount;
