import { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import {
  SearchContainer,
  SearchInput,
  SearchResults,
  ResultItem,
  SelectedBrands,
  BrandTag
} from './styles';

export const ComparisonSearch = ({ onSelect, onRemove, selectedBrands }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (term) => {
    // Simulate API call
    const mockResults = [
      {
        id: '1',
        name: 'Tech Solutions Ltd',
        cnpj: '12.345.678/0001-90',
        category: 'Tecnologia'
      },
      {
        id: '2',
        name: 'Digital Services SA',
        cnpj: '98.765.432/0001-10',
        category: 'Serviços'
      }
    ];

    setResults(mockResults);
  };

  const handleSelect = (brand) => {
    if (selectedBrands.length < 3) {
      onSelect(brand);
      setSearchTerm('');
      setResults([]);
    }
  };

  return (
    <SearchContainer>
      <SearchInput>
        <FiSearch />
        <input
          type="text"
          placeholder="Buscar marcas para comparar..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </SearchInput>

      {searchTerm && (
        <SearchResults>
          {results.map(brand => (
            <ResultItem
              key={brand.id}
              onClick={() => handleSelect(brand)}
            >
              <div className="info">
                <div className="logo">
                  {brand.name.charAt(0)}
                </div>
                <div className="details">
                  <h4>{brand.name}</h4>
                  <span>{brand.category}</span>
                </div>
              </div>
              <span>{brand.cnpj}</span>
            </ResultItem>
          ))}
        </SearchResults>
      )}

      <SelectedBrands>
        {selectedBrands.map(brand => (
          <BrandTag key={brand.id}>
            {brand.name}
            <button onClick={() => onRemove(brand.id)}>
              <FiX />
            </button>
          </BrandTag>
        ))}
      </SelectedBrands>
    </SearchContainer>
  );
};
