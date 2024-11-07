// src/pages/Search/index.jsx
import { useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { BrandCard } from '../../components/BrandCard';
import {
  PageContainer, // Renomeado de SearchPage para PageContainer
  ResultsContainer,
  ResultsHeader,
  FiltersContainer
} from './styles';

const mockBrands = [
  {
    id: 1,
    name: 'Tech Solutions Ltd',
    status: 'trusted',
    cnpj: '12.345.678/0001-90',
    verificationDate: '15/01/2024',
    complaints: 0
  },
  {
    id: 2,
    name: 'Digital Services SA',
    status: 'suspicious',
    cnpj: '98.765.432/0001-10',
    verificationDate: '10/01/2024',
    complaints: 3
  }
];

export const SearchPage = () => {
  const [searchResults, setSearchResults] = useState(mockBrands);
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <PageContainer>
      <SearchBar onSearch={(term) => console.log('Searching:', term)} />
      
      <ResultsContainer>
        <ResultsHeader>
          <h2>Resultados da Pesquisa</h2>
          <FiltersContainer>
            <button 
              className={activeFilter === 'all' ? 'active' : ''}
              onClick={() => setActiveFilter('all')}
            >
              Todas
            </button>
            <button 
              className={activeFilter === 'trusted' ? 'active' : ''}
              onClick={() => setActiveFilter('trusted')}
            >
              Confiáveis
            </button>
            <button 
              className={activeFilter === 'suspicious' ? 'active' : ''}
              onClick={() => setActiveFilter('suspicious')}
            >
              Suspeitas
            </button>
          </FiltersContainer>
        </ResultsHeader>

        {searchResults.map(brand => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </ResultsContainer>
    </PageContainer>
  );
};
