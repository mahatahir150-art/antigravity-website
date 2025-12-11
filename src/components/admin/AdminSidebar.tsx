'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ShieldAlert, Users, Settings, LogOut } from 'lucide-react';

const ADMIN_MENU = [
    { name: 'Overview', icon: LayoutDashboard, href: '/admin' },
    { name: 'Moderation Queue', icon: ShieldAlert, href: '/admin/listings' },
    { name: 'Users', icon: Users, href: '/admin/users' },
    { name: 'Platform Settings', icon: Settings, href: '/admin/settings' },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside style={{
            width: '260px',
            backgroundColor: '#1a202c', // Dark mode for Admin
            color: '#fff',
            height: '100vh',
            position: 'sticky',
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem'
        }}>
            <div style={{ marginBottom: '2.5rem', paddingLeft: '0.5rem' }}>
                <Link href="/admin" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
                    R&R Admin
                </Link>
            </div>

            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {ADMIN_MENU.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.75rem 1rem',
                                borderRadius: '8px',
                                color: isActive ? '#fff' : '#a0aec0',
                                backgroundColor: isActive ? '#2d3748' : 'transparent',
                                fontWeight: isActive ? 600 : 400,
                                transition: 'background-color 0.2s'
                            }}
                        >
                            <item.icon size={20} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div style={{ marginTop: 'auto', borderTop: '1px solid #2d3748', paddingTop: '1rem' }}>
                <Link href="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    color: '#fc8181', // Redish for logout
                    background: 'none',
                    border: 'none',
                    marginTop: '0.5rem',
                    cursor: 'pointer'
                }}>
                    <LogOut size={20} />
                    Exit Admin
                </Link>
            </div>
        </aside>
    );
}
