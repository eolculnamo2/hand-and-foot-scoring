import * as React from "react";
import Nav from "~/components/Nav";

interface BasePageLayoutProps {
  children: React.ReactNode;
}
const BasePageLayout = ({ children }: BasePageLayoutProps) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default BasePageLayout;
