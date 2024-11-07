import React from 'react';
import { useState } from 'react';
import { AdminLayout } from '../AdminLayout';
import { VerificationTable } from '../../components/VerificationTable';
import {
  FiltersContainer,
  FilterGroup,
  FilterButton,
  SearchInput
} from './styles';

const mockVerifications = [
  {
    id: 1,
    brandName: 'Tech Solutions Ltd',
    date: '15/01/2024',
    type: 'Inicial',
    status: 'pending'
  },
  {
    id: 2,
    brandName: 'Digital Services SA',
    date: '14/01/2024',
    type: 'Renovação',
    status: 'approved'
  },
  {
    id: 3,
    brandName: 'Innovation Corp',
    date: '13/01/2024',
    type: 'Inicial',
    status: 'rejected'
  }
];

export const AdminVerifications = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const handleView = (verification) => {
    console.log('View verification:', verification);
  };

  const handleEdit = (verification) => {
    console.log('Edit verification:', verification);
  };

  const handleDelete = (verification) => {
    console.log('Delete verification:', verification);
  };

  return (
    <AdminLayout
      title="Verificações"
      description="Gerencie as solicitações de verificação de marcas"
    >
      <FiltersContainer>
        <FilterGroup>
          <FilterButton
            active={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            Todas
          </FilterButton>
          <FilterButton
            active={filter === 'pending'}
            onClick={() => setFilter('pending')}
          >
            Pendentes
          </FilterButton>
          <FilterButton
            active={filter === 'approved'}
            onClick={() => setFilter('approved')}
          >
            Aprovadas
          </FilterButton>
          <FilterButton
            active={filter === 'rejected'}
            onClick={() => setFilter('rejected')}
          >
            Rejeitadas
          </FilterButton>
        </FilterGroup>

        <SearchInput
          type="text"
          placeholder="Buscar verificações..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </FiltersContainer>

      <VerificationTable
        verifications={mockVerifications}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </AdminLayout>
  );
};
