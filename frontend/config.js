/**
 * DCSION3 - Central Environment & API Configuration
 *
 * Automatically resolves the backend API endpoint:
 * - Native Mobile (Capacitor Android): Targets Google Cloud Run backend.
 * - Vercel / Web Production: Targets Google Cloud Run backend.
 * - Web Browser (Localhost): Uses local Flask server on port 5000.
 */
(function() {
    const isNativeMobile = !!(
        window.Capacitor &&
        typeof window.Capacitor.isNativePlatform === 'function' &&
        window.Capacitor.isNativePlatform()
    );

    // Production backend URL (Google Cloud Run)
    const PRODUCTION_CLOUD_BACKEND = 'https://dcsion3-git-232142192878.europe-west1.run.app';

    // Auto-detect environment:
    let apiBase = '';
    if (
        window.location.protocol === 'file:' ||
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1'
    ) {
        apiBase = (window.location.port === '5000' || window.location.port === '') ? '' : 'http://localhost:5000';
    } else if (isNativeMobile || window.location.hostname.includes('vercel.app')) {
        apiBase = PRODUCTION_CLOUD_BACKEND;
    }

    window.DCSION3_CONFIG = {
        IS_NATIVE: isNativeMobile,
        API_BASE_URL: apiBase,
        PRODUCTION_CLOUD_BACKEND: PRODUCTION_CLOUD_BACKEND,
        VERSION: '1.0.0',
        ENV: isNativeMobile ? 'production_mobile' : 'web'
    };
})();
