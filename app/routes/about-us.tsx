import { LinksFunction } from "remix";
import BasePageLayout from "~/layouts/BasePageLayout";
import { buildLinks } from "~/utils/pages";

export const links: LinksFunction = buildLinks();
const AboutUs = () => (
  <BasePageLayout>
    <h1>Hello</h1>
  </BasePageLayout>
);

export default AboutUs;
