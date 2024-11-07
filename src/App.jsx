import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Navbar } from './components/Navbar';
import { SearchPage } from './pages/Search';
import { BrandDetails } from './pages/BrandDetails';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { VerifyEmailPage } from './pages/VerifyEmail';
import { DashboardPage } from './pages/Dashboard';
import { VerificationPage } from './pages/Verification';
import { AdminVerifications } from './pages/AdminVerifications';
import { AdminAnalytics } from './pages/AdminAnalytics';
import { AdminReports } from './pages/AdminReports';
import { BrandRatings } from './pages/BrandRatings';
import { PricingPage } from './pages/Pricing';
import { NotificationSettings } from './pages/NotificationSettings';
import { BrandComparison } from './pages/BrandComparison';
import { BrandInsights } from './pages/BrandInsights';
import { FiUsers } from 'react-icons/fi';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <NotificationProvider>
          <BrowserRouter>
            <GlobalStyles />
            <Routes>
              {/* Public routes */}
              <Route path="/search" element={<SearchPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/verify-email" element={<VerifyEmailPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/brand/:id/ratings" element={<BrandRatings />} />
              <Route path="/compare" element={<BrandComparison />} />
              
              {/* Protected routes */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Navbar />
                    <DashboardPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/brand/:id/insights" 
                element={
                  <ProtectedRoute>
                    <Navbar />
                    <BrandInsights />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/settings/notifications" 
                element={
                  <ProtectedRoute>
                    <Navbar />
                    <NotificationSettings />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/verification" 
                element={
                  <ProtectedRoute>
                    <Navbar />
                    <VerificationPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/brand/:id" 
                element={
                  <ProtectedRoute>
                    <Navbar />
                    <BrandDetails />
                  </ProtectedRoute>
                } 
              />
              
              {/* Admin routes */}
              <Route 
                path="/admin/*" 
                element={
                  <ProtectedRoute>
                    <AdminVerifications />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </BrowserRouter>
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
