'use client';

import AdminSidebar from './AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f7fafc' }}>
            <AdminSidebar />
            <main style={{ flex: 1, padding: '2rem', maxWidth: '100vw', overflowX: 'auto' }}>
                {children}
            </main>
        </div>
    );
}
