import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import HomePage from './pages/HomePage';
import TreatmentsPage from './pages/TreatmentsPage';
import HospitalsPackagesPage from './pages/HospitalsPackagesPage';
import SpecialtyDetailPage from './pages/SpecialtyDetailPage';
import WhyGujaratPage from './pages/WhyGujaratPage';
import InternationalPatientsPage from './pages/InternationalPatientsPage';
import AboutUsPage from './pages/AboutUsPage';
import FreeOpinionPage from './pages/FreeOpinionPage';
import ContactPage from './pages/ContactPage';

// Parse current URL hash into route state
const parseHash = () => {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return { page: 'home', specialtyId: 'cardiac-care' };
  
  const [page, queryString] = hash.split('?');
  const params = new URLSearchParams(queryString || '');
  const specialtyId = params.get('id') || 'cardiac-care';

  const validPages = [
    'home', 
    'treatments', 
    'hospitals-packages', 
    'your-journey', 
    'specialty-detail', 
    'why-us', 
    'about-us', 
    'free-opinion', 
    'contact'
  ];
  
  return {
    page: validPages.includes(page) ? page : 'home',
    specialtyId
  };
};

export default function App() {
  const [route, setRoute] = useState(parseHash());

  // Listen to browser Back / Forward actions and Hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash());
    };

    // Initialize hash if empty
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#home');
    }

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // Navigate helper that updates URL hash and browser history
  const navigateTo = (page, specialtyId = null) => {
    let newHash = `#${page}`;
    if (page === 'specialty-detail' && specialtyId) {
      newHash = `#specialty-detail?id=${specialtyId}`;
    }
    
    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    } else {
      setRoute({ page, specialtyId: specialtyId || route.specialtyId });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activePage = route.page;
  const selectedSpecialtyId = route.specialtyId;

  const handleSetActivePage = (page) => {
    navigateTo(page);
  };

  const handleSetSelectedSpecialtyId = (id) => {
    navigateTo('specialty-detail', id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-500 selection:text-white">
      {/* Header Navigation */}
      <Navbar activePage={activePage} setActivePage={handleSetActivePage} />

      {/* Main Page Body */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomePage 
            setActivePage={handleSetActivePage} 
            setSelectedSpecialtyId={handleSetSelectedSpecialtyId} 
          />
        )}

        {activePage === 'treatments' && (
          <TreatmentsPage 
            setActivePage={handleSetActivePage} 
            setSelectedSpecialtyId={handleSetSelectedSpecialtyId} 
          />
        )}

        {activePage === 'hospitals-packages' && (
          <HospitalsPackagesPage 
            setActivePage={handleSetActivePage} 
          />
        )}

        {activePage === 'your-journey' && (
          <InternationalPatientsPage 
            setActivePage={handleSetActivePage} 
          />
        )}

        {activePage === 'specialty-detail' && (
          <SpecialtyDetailPage 
            specialtyId={selectedSpecialtyId} 
            setActivePage={handleSetActivePage} 
          />
        )}

        {activePage === 'why-us' && (
          <WhyGujaratPage setActivePage={handleSetActivePage} />
        )}

        {activePage === 'about-us' && (
          <AboutUsPage setActivePage={handleSetActivePage} />
        )}

        {activePage === 'free-opinion' && (
          <FreeOpinionPage />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer setActivePage={handleSetActivePage} />
    </div>
  );
}
