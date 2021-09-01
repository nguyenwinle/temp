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

const PartnerContext = React.createContext<Context>(undefined);

export const usePartnerContext = (): Context => {
  const page = React.useContext(PartnerContext);
  if (!page) {
    throw new Error("Component must be in the <Partner /> tree to use context");
  }
  return page;
};

export const PartnerProvider: React.FC<{ page: Page }> = ({ children, page }) => {
  return (
    <PartnerContext.Provider value={{ page }}>{children}</PartnerContext.Provider>
  );
};

const ProgramContext = React.createContext<Context>(undefined);

export const useProgramContext = (): Context => {
  const page = React.useContext(ProgramContext);
  if (!page) {
    throw new Error("Component must be in the <Program /> tree to use context");
  }
  return page;
};

export const ProgramProvider: React.FC<{ page: Page }> = ({ children, page }) => {
  return (
    <ProgramContext.Provider value={{ page }}>{children}</ProgramContext.Provider>
  );
};

const SpeakerContext = React.createContext<Context>(undefined);

export const useSpeakerContext = (): Context => {
  const page = React.useContext(SpeakerContext);
  if (!page) {
    throw new Error("Component must be in the <Speaker /> tree to use context");
  }
  return page;
};

export const SpeakerProvider: React.FC<{ page: Page }> = ({ children, page }) => {
  return (
    <SpeakerContext.Provider value={{ page }}>{children}</SpeakerContext.Provider>
  );
};