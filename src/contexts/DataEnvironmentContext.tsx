import React, { createContext, useContext, useMemo, useState } from 'react';
import { DataEnvironment } from '../types/DataEnvironment';

type SetState = (dataEnvironment: DataEnvironment) => void;
type ContextValue = [DataEnvironment | undefined, SetState];
type DataEnvironmentProviderProps = { children: React.ReactNode };

const DataEnvironmentContext = createContext<ContextValue | undefined>(undefined);

function DataEnvironmentProvider({ children }: DataEnvironmentProviderProps) {
  const [dataEnvironment, setDataEnvironment] = useState<DataEnvironment>();
  const value = useMemo<ContextValue>(() => [dataEnvironment, setDataEnvironment], [
    dataEnvironment,
    setDataEnvironment,
  ]);

  return (
    <DataEnvironmentContext.Provider value={value}>{children}</DataEnvironmentContext.Provider>
  );
}

function useDataEnvironment() {
  const context = useContext(DataEnvironmentContext);

  if (context === undefined) {
    throw new Error('useDataEnvironment must be used within a DataEnvironmentProvider');
  }

  return context;
}

export { DataEnvironmentProvider, useDataEnvironment };
