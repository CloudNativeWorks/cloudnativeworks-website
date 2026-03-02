import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ClusterEyePage = lazy(() => import('./pages/ClusterEyePage'));
const ElchiPage = lazy(() => import('./pages/ElchiPage'));
const MergePilotPage = lazy(() => import('./pages/MergePilotPage'));
const CertAutoPilotPage = lazy(() => import('./pages/CertAutoPilotPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const EngineeringPage = lazy(() => import('./pages/EngineeringPage'));
const SecurityPage = lazy(() => import('./pages/SecurityPage'));
const CompanyPage = lazy(() => import('./pages/CompanyPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0A0F',
          color: '#A0A0B8',
          fontFamily: 'Inter, sans-serif'
        }}>
          Loading...
        </div>
      }>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/clustereye" element={<ClusterEyePage />} />
            <Route path="products/elchi" element={<ElchiPage />} />
            <Route path="products/mergepilot" element={<MergePilotPage />} />
            <Route path="products/certautopilot" element={<CertAutoPilotPage />} />
            <Route path="solutions" element={<SolutionsPage />} />
            <Route path="engineering" element={<EngineeringPage />} />
            <Route path="security" element={<SecurityPage />} />
            <Route path="company" element={<CompanyPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
