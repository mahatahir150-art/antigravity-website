'use client';

import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

export default function DashboardLayoutWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            {/* Desktop Sidebar */}
            <div className="desktop-only" style={{ display: 'none' }}>
                <Sidebar />
            </div>

            {/* CSS override for desktop-only class to actually work with flex layout structure properly 
            Wait, I already added .desktop-only in globals.css but here I need specific structure.
            Let's use a media query wrapper here or rely on the Sidebar's internal styling or layout.
            Actually, simpler approach: Use inline media queries if possible or just standard css modules.
            For MVP single file component simplicity:
        */}
            <style jsx global>{`
            @media (min-width: 768px) {
                .sidebar-wrapper {
                    display: block !important;
                }
                .mobile-nav-wrapper {
                    display: none !important;
                }
                .dashboard-content {
                    margin-left: 0; 
                    width: 100%;
                }
            }
            @media (max-width: 767px) {
                .sidebar-wrapper {
                     display: none !important;
                }
                .mobile-nav-wrapper {
                    display: block !important;
                }
                .dashboard-content {
                    padding-bottom: 70px; /* Space for bottom nav */
                }
            }
        `}</style>

            <div className="sidebar-wrapper" style={{ display: 'none' }}>
                <Sidebar />
            </div>

            <main className="dashboard-content" style={{ flex: 1, padding: '2rem', maxWidth: '100vw', overflowX: 'hidden' }}>
                {children}
            </main>

            <div className="mobile-nav-wrapper" style={{ display: 'block' }}>
                <BottomNav />
            </div>
        </div>
    );
}
