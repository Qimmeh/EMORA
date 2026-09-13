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

    // Production backend URL (Coolify / Self-Hosted)
    // When served via Coolify or behind a reverse proxy, relative '' routes directly to the backend
    const COOLIFY_BACKEND_URL = window.COOLIFY_BACKEND_URL || '';

    // Auto-detect environment:
    let apiBase = '';
    if (
        window.location.protocol === 'file:' ||
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1'
    ) {
        apiBase = (window.location.port === '5000' || window.location.port === '') ? '' : 'http://localhost:5000';
    } else {
        apiBase = COOLIFY_BACKEND_URL;
    }

    window.DCSION3_CONFIG = {
        IS_NATIVE: isNativeMobile,
        API_BASE_URL: apiBase,
        COOLIFY_BACKEND_URL: COOLIFY_BACKEND_URL,
        VERSION: '1.0.0',
        ENV: isNativeMobile ? 'production_mobile' : 'web'
    };
})();
