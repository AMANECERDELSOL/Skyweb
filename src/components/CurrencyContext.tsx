import React, { createContext, useContext, useState, useEffect } from 'react';

interface CurrencyContextType {
  currency: 'MXN' | 'USD' | 'EUR';
  setCurrency: (currency: 'MXN' | 'USD' | 'EUR') => void;
  convertPrice: (price: number) => string;
  getCurrencySymbol: () => string;
  rates: { USD: number; EUR: number };
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<'MXN' | 'USD' | 'EUR'>('MXN');
  const rates = { USD: 18.5, EUR: 20.2 };

  const convertPrice = (price: number): string => {
    switch (currency) {
      case 'USD':
        return (price / rates.USD).toFixed(2);
      case 'EUR':
        return (price / rates.EUR).toFixed(2);
      default:
        return price.toFixed(2);
    }
  };

  const getCurrencySymbol = (): string => {
    switch (currency) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      default:
        return '$';
    }
  };

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency,
      convertPrice,
      getCurrencySymbol,
      rates
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};
