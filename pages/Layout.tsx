import React, { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className="max-w-6xl mx-auto">{children}</div>;
};

export default Layout;
