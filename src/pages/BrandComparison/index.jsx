import React from 'react';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { ComparisonSearch } from '../../components/ComparisonSearch';
import { ComparisonTable } from '../../components/ComparisonTable';
import {
  ComparisonContainer,
  ComparisonHeader,
  EmptyState
} from './styles';

const mockBrandData = {
  '1': {
    id: '1',
    name: 'Tech Solutions Ltd',
    cnpj: '12.345.678/0001-90',
    trustScore: '4.8',
    trustScoreTrend: 0.5,
    verificationStatus: 'verified',
    responseTime: '24h',
    responseTimeTrend: -0.2,
    satisfactionRate: '95%',
    satisfactionRateTrend: 0.3,
    totalReviews: '1,234',
    totalReviewsTrend: 0.8,
    complaintsResolved: '98%',
    complaintsResolvedTrend: 0
  },
  '2': {
    id: '2',
    name: 'Digital Services SA',
    cnpj: '98.765.432/0001-10',
    trustScore: '4.2',
    trustScoreTrend: 0.2,
    verificationStatus: 'pending',
    responseTime: '48h',
    responseTimeTrend: 0.1,
    satisfactionRate: '87%',
    satisfactionRateTrend: 0.4,
    totalReviews: '856',
    totalReviewsTrend: 0.6,
    complaintsResolved: '92%',
    complaintsResolvedTrend: 0.3
  }
};

export const BrandComparison = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleSelectBrand = (brand) => {
    if (selectedBrands.length < 3) {
      setSelectedBrands(prev => [...prev, {
        ...brand,
        ...mockBrandData[brand.id]
      }]);
    }
  };

  const handleRemoveBrand = (brandId) => {
    setSelectedBrands(prev => prev.filter(brand => brand.id !== brandId));
  };

  return (
    <ComparisonContainer>
      <ComparisonHeader>
        <h1>Comparar Marcas</h1>
        <p>Compare até 3 marcas para analisar seus índices de confiabilidade</p>
      </ComparisonHeader>

      <ComparisonSearch
        onSelect={handleSelectBrand}
        onRemove={handleRemoveBrand}
        selectedBrands={selectedBrands}
      />

      {selectedBrands.length > 0 ? (
        <ComparisonTable brands={selectedBrands} />
      ) : (
        <EmptyState>
          <FiSearch />
          <h3>Nenhuma marca selecionada</h3>
          <p>Busque e selecione marcas para comparar seus índices</p>
        </EmptyState>
      )}
    </ComparisonContainer>
  );
};
