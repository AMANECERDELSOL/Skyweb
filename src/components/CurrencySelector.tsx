import React from 'react';
import { DollarSign } from 'lucide-react';
import { useCurrency } from './CurrencyContext';

const CurrencySelector = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-700">
      <DollarSign className="w-4 h-4 text-cyan-400 ml-2" />
      {['MXN', 'USD', 'EUR'].map((curr) => (
        <button
          key={curr}
          onClick={() => setCurrency(curr as 'MXN' | 'USD' | 'EUR')}
          className={`px-3 py-1.5 rounded-full font-medium text-sm transition-all duration-300 ${
            currency === curr
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {curr}
        </button>
      ))}
    </div>
  );
};

export default CurrencySelector;
