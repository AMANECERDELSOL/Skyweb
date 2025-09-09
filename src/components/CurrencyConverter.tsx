import React, { useState, useEffect } from 'react';
import { DollarSign, Euro, PiggyBank } from 'lucide-react';

interface ExchangeRates {
  USD: number;
  EUR: number;
}

const CurrencyConverter = () => {
  const [rates, setRates] = useState<ExchangeRates>({ USD: 18.5, EUR: 20.2 });
  const [selectedCurrency, setSelectedCurrency] = useState<'MXN' | 'USD' | 'EUR'>('MXN');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simulamos una API de tipos de cambio
    const fetchRates = async () => {
      try {
        // En producción, aquí usarías una API real como exchangerate-api.com
        const mockRates = {
          USD: 18.5 + Math.random() * 0.5,
          EUR: 20.2 + Math.random() * 0.5,
        };
        setRates(mockRates);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 300000); // Actualizar cada 5 minutos
    return () => clearInterval(interval);
  }, []);

  const convertPrice = (price: number) => {
    switch (selectedCurrency) {
      case 'USD':
        return (price / rates.USD).toFixed(2);
      case 'EUR':
        return (price / rates.EUR).toFixed(2);
      default:
        return price.toFixed(2);
    }
  };

  const getCurrencySymbol = () => {
    switch (selectedCurrency) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      default:
        return '$';
    }
  };

  const getCurrencyIcon = () => {
    switch (selectedCurrency) {
      case 'USD':
        return <DollarSign className="w-4 h-4" />;
      case 'EUR':
        return <Euro className="w-4 h-4" />;
      default:
        return <PiggyBank className="w-4 h-4" />;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-600 hover:border-cyan-400 transition-all duration-300 text-sm"
      >
        {getCurrencyIcon()}
        <span className="text-gray-300">{selectedCurrency}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-gray-800 rounded-lg border border-gray-600 shadow-xl min-w-[200px] z-50">
          <div className="p-3">
            <h4 className="text-white font-medium mb-2">Moneda</h4>
            <div className="space-y-2">
              {[
                { code: 'MXN', name: 'Peso Mexicano', icon: <PiggyBank className="w-4 h-4" /> },
                { code: 'USD', name: 'Dólar USD', icon: <DollarSign className="w-4 h-4" /> },
                { code: 'EUR', name: 'Euro', icon: <Euro className="w-4 h-4" /> },
              ].map((currency) => (
                <button
                  key={currency.code}
                  onClick={() => {
                    setSelectedCurrency(currency.code as 'MXN' | 'USD' | 'EUR');
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    selectedCurrency === currency.code
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {currency.icon}
                  <span>{currency.name}</span>
                </button>
              ))}
            </div>
            {selectedCurrency !== 'MXN' && (
              <div className="mt-3 pt-3 border-t border-gray-600 text-xs text-gray-400">
                1 USD = ${rates.USD.toFixed(2)} MXN<br />
                1 EUR = ${rates.EUR.toFixed(2)} MXN
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;