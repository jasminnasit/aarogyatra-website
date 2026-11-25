export const BASE_URL = 'https://www.aarogyatraglobalcare.com';

export const ROUTE_PATHS = {
  home: '/',
  treatments: '/treatments/',
  'hospitals-packages': '/hospitals-packages/',
  'patient-journey': '/patient-journey/',
  'about-us': '/about-us/',
  faqs: '/faqs/',
  'free-opinion': '/free-opinion/',
  contact: '/contact/'
};

export const SPECIALTY_PATHS = {
  'cardiac-care': '/cardiac-treatment-in-india/',
  'orthopedics-joint-replacement': '/orthopaedic-treatment-in-india/',
  oncology: '/cancer-treatment-in-india/',
  'kidney-urology': '/kidney-urology-treatment-in-india/',
  'general-advanced-surgery': '/general-surgery-in-india/',
  dentistry: '/dentistry-treatment-in-india/',
  'cosmetology-aesthetics': '/cosmetology-aesthetics-in-india/'
};

export function getPathForRoute(page, specialtyId = null) {
  if (page === 'specialty-detail') {
    return SPECIALTY_PATHS[specialtyId] || SPECIALTY_PATHS['cardiac-care'];
  }
  if (page === 'your-journey') {
    return ROUTE_PATHS['patient-journey'];
  }
  return ROUTE_PATHS[page] || '/';
}

export function getCanonicalUrl(page, specialtyId = null) {
  return `${BASE_URL}${getPathForRoute(page, specialtyId)}`;
}

export function normalizePathname(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function resolveRouteFromLocation(loc = window.location) {
  const normalizedPath = normalizePathname(loc.pathname);

  // 1. Check clean specialty path
  for (const [id, path] of Object.entries(SPECIALTY_PATHS)) {
    if (normalizedPath === path) {
      return { page: 'specialty-detail', specialtyId: id, shouldCanonicalizePath: false };
    }
  }

  // 2. Check clean page path
  for (const [page, path] of Object.entries(ROUTE_PATHS)) {
    if (path !== '/' && normalizedPath === path) {
      return { page, specialtyId: 'cardiac-care', shouldCanonicalizePath: false };
    }
  }

  // 3. Legacy hash URL fallback (#your-journey, #specialty-detail?id=...)
  const hash = (loc.hash || '').replace(/^#/, '');
  if (hash) {
    const [rawPage, queryString] = hash.split('?');
    const params = new URLSearchParams(queryString || '');
    const specialtyId = params.get('id') || 'cardiac-care';
    const mappedPage = rawPage === 'your-journey' ? 'patient-journey' : rawPage;

    if (mappedPage === 'specialty-detail') {
      return { page: 'specialty-detail', specialtyId, shouldCanonicalizePath: true };
    }
    if (ROUTE_PATHS[mappedPage]) {
      return { page: mappedPage, specialtyId, shouldCanonicalizePath: mappedPage !== 'home' || loc.hash === '#home' };
    }
  }

  // 4. Legacy query-param URL fallback (?page=treatments, ?page=specialty-detail&id=...)
  const searchParams = new URLSearchParams(loc.search || '');
  const queryPage = searchParams.get('page');
  const querySpecialtyId = searchParams.get('id') || 'cardiac-care';
  const mappedQueryPage = queryPage === 'your-journey' ? 'patient-journey' : queryPage;

  if (mappedQueryPage === 'specialty-detail') {
    return { page: 'specialty-detail', specialtyId: querySpecialtyId, shouldCanonicalizePath: true };
  }
  if (mappedQueryPage && ROUTE_PATHS[mappedQueryPage]) {
    return { page: mappedQueryPage, specialtyId: querySpecialtyId, shouldCanonicalizePath: true };
  }

  return { page: 'home', specialtyId: 'cardiac-care', shouldCanonicalizePath: false };
}
