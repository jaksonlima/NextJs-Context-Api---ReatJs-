import React, { createContext, useContext, useState } from "react";

const ContextProvider = createContext();

export default function ContextComponent({ children }) {
  const [value, setValue] = useState({ count: 0 });

  return <ContextProvider.Provider value={{ value, setValue }}>{children}</ContextProvider.Provider>;
}

export function useContextProvider() {
  const context = useContext(ContextProvider);

  if (!context) throw new Error("Não foi possivel obter o context é obrigatório o uso ContextComponent.");

  const { value, setValue } = context;

  return {
    value,
    setValue,
  };
}
