import { SearchContainer, SearchInput } from './styles';
import { FiSearch } from 'react-icons/fi';

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    onSearch(searchTerm);
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        <SearchInput>
          <FiSearch />
          <input
            type="text"
            name="search"
            placeholder="Pesquisar marca..."
            autoComplete="off"
          />
        </SearchInput>
      </form>
    </SearchContainer>
  );
};
