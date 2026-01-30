import { createContext } from 'react';

export interface ConfigurationContextType {
  iconsType?: 'font' | 'svg';
}

export const ConfigurationContext = createContext<ConfigurationContextType>({ iconsType: 'svg' });