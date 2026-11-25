import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import HomePage from './pages/HomePage';
import TreatmentsPage from './pages/TreatmentsPage';
import HospitalsPackagesPage from './pages/HospitalsPackagesPage';
import SpecialtyDetailPage from './pages/SpecialtyDetailPage';
import InternationalPatientsPage from './pages/InternationalPatientsPage';
import AboutUsPage from './pages/AboutUsPage';
import FAQsPage from './pages/FAQsPage';
import FreeOpinionPage from './pages/FreeOpinionPage';
import ContactPage from './pages/ContactPage';
import SEOHead from './components/SEOHead';
import { getPathForRoute, resolveRouteFromLocation } from './utils/routes';

export default function App() {
  const initialResolved = resolveRouteFromLocation();
  const [route, setRoute] = useState({
    page: initialResolved.page,
    specialtyId: initialResolved.specialtyId
  });
  const [contactTreatment, setContactTreatment] = useState('');

  // Listen to browser Back / Forward actions and legacy hash changes
  useEffect(() => {
    if (initialResolved.shouldCanonicalizePath) {
      const targetPath = getPathForRoute(initialResolved.page, initialResolved.specialtyId);
      const preservedSearch = window.location.search && !window.location.search.includes('page=')
        ? window.location.search
        : '';
      window.history.replaceState(null, '', `${targetPath}${preservedSearch}`);
    }

    const handleNavigationEvent = () => {
      const resolved = resolveRouteFromLocation();
      setRoute({ page: resolved.page, specialtyId: resolved.specialtyId });
    };

    window.addEventListener('popstate', handleNavigationEvent);
    window.addEventListener('hashchange', handleNavigationEvent);

    return () => {
      window.removeEventListener('popstate', handleNavigationEvent);
      window.removeEventListener('hashchange', handleNavigationEvent);
    };
  }, []);

  // Navigate helper using clean URL paths while preserving scroll behavior
  const navigateTo = (page, specialtyId = null) => {
    const normalizedPage = page === 'your-journey' ? 'patient-journey' : page;
    const targetSpecialtyId = specialtyId || route.specialtyId || 'cardiac-care';
    const nextPath = getPathForRoute(normalizedPage, targetSpecialtyId);

    setRoute({ page: normalizedPage, specialtyId: targetSpecialtyId });
    if (window.location.pathname !== nextPath) {
      window.history.pushState(null, '', nextPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activePage = route.page;
  const selectedSpecialtyId = route.specialtyId;

  const handleSetActivePage = (page) => {
    if (page !== 'contact') {
      setContactTreatment('');
    }
    navigateTo(page);
  };

  const handleSetSelectedSpecialtyId = (id) => {
    navigateTo('specialty-detail', id);
  };

  const handleEnquireSpecialty = (treatmentTitle) => {
    setContactTreatment(treatmentTitle);
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-500 selection:text-white">
      {/* Dynamic SEO Meta Manager */}
      <SEOHead page={activePage} specialtyId={selectedSpecialtyId} />

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

        {activePage === 'patient-journey' && (
          <InternationalPatientsPage 
            setActivePage={handleSetActivePage} 
          />
        )}

        {activePage === 'specialty-detail' && (
          <SpecialtyDetailPage 
            specialtyId={selectedSpecialtyId} 
            setActivePage={handleSetActivePage}
            onEnquireSpecialty={handleEnquireSpecialty}
          />
        )}

        {activePage === 'about-us' && (
          <AboutUsPage setActivePage={handleSetActivePage} />
        )}

        {activePage === 'faqs' && (
          <FAQsPage setActivePage={handleSetActivePage} />
        )}

        {activePage === 'free-opinion' && (
          <FreeOpinionPage />
        )}

        {activePage === 'contact' && (
          <ContactPage initialTreatment={contactTreatment} />
        )}
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer 
        setActivePage={handleSetActivePage} 
        setSelectedSpecialtyId={handleSetSelectedSpecialtyId}
      />
    </div>
  );
}
