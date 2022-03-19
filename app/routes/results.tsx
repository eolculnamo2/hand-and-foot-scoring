import { LinksFunction } from "remix";
import BasePageLayout from "~/layouts/BasePageLayout";
import { buildLinks } from "~/utils/pages";

export const links: LinksFunction = buildLinks();
const Results = () => (
  <BasePageLayout>
   <div>START HERE
       
      
   </div>
  </BasePageLayout>
);

export default Results;
