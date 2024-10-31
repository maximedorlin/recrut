import React, { createContext, useState, ReactNode } from 'react';

// Définir l'interface pour les valeurs du contexte
interface ContextType {
  formData: string;
  setFormData: (data: string) => void;
}

// Créer le contexte avec un type par défaut
const defaultContextValue: ContextType = {
  formData: '',
  setFormData: () => {}
};

export const Context = createContext<ContextType>(defaultContextValue);

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<string>('');

  return (
    <Context.Provider value={{ formData, setFormData }}>
      {children}
    </Context.Provider>
  );
};
