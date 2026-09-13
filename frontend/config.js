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

    // Production backend URLs
    const VERCEL_BACKEND = 'https://dcsion-3.vercel.app';
    const CLOUD_RUN_BACKEND = 'https://dcsion3-git-232142192878.europe-west1.run.app';

    // Auto-detect environment:
    let apiBase = '';
    if (window.location.hostname.includes('vercel.app')) {
        // Native Vercel deployment - relative path to same-origin Serverless Functions
        apiBase = '';
    } else if (isNativeMobile) {
        apiBase = VERCEL_BACKEND;
    } else if (
        window.location.protocol === 'file:' ||
        ((window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') &&
         window.location.port !== '5000' && window.location.port !== '')
    ) {
        apiBase = 'http://localhost:5000';
    }

    window.DCSION3_CONFIG = {
        IS_NATIVE: isNativeMobile,
        API_BASE_URL: apiBase,
        PRODUCTION_CLOUD_BACKEND: VERCEL_BACKEND,
        CLOUD_RUN_BACKEND: CLOUD_RUN_BACKEND,
        VERSION: '1.0.0',
        ENV: isNativeMobile ? 'production_mobile' : 'web'
    };
})();
