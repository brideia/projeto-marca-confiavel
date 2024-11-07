import React from 'react';
import { AdminSidebar } from '../../components/AdminSidebar';
import { AdminHeader } from '../../components/AdminHeader';
import { AdminContainer, AdminContent } from './styles';

export const AdminLayout = ({ children, title, description }) => {
  return (
    <>
      <AdminSidebar />
      <AdminContainer>
        <AdminHeader title={title} description={description} />
        <AdminContent>
          {children}
        </AdminContent>
      </AdminContainer>
    </>
  );
};
