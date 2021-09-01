import React from "react";

import { Page } from "../../lib/types";

type Context = { page: Page };
const HomeContext = React.createContext<Context>(undefined);

export const useHomeContext = (): Context => {
  const page = React.useContext(HomeContext);
  if (!page) {
    throw new Error("Component must be in the <Home /> tree to use context");
  }
  return page;
};

export const HomeProvider: React.FC<{ page: Page }> = ({ children, page }) => {
  return (
    <HomeContext.Provider value={{ page }}>{children}</HomeContext.Provider>
  );
};
