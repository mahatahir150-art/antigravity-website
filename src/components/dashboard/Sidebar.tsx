'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Package, QrCode, MessageSquare, User, Settings, HelpCircle, LogOut } from 'lucide-react';

const MENU_ITEMS = [
    { name: 'Home', icon: Home, href: '/dashboard' },
    { name: 'Track My Product', icon: QrCode, href: '/dashboard/track' },
    { name: 'My Rentals', icon: Package, href: '/dashboard/rentals' },
    { name: 'My Listed Products', icon: Package, href: '/dashboard/my-items' },
    { name: 'Messages', icon: MessageSquare, href: '/dashboard/messages' },
    { name: 'Profile', icon: User, href: '/dashboard/profile' },
];

const BOTTOM_ITEMS = [
    { name: 'Help & Support', icon: HelpCircle, href: '/dashboard/support' },
    { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside style={{
            width: '260px',
            backgroundColor: 'var(--white)',
            borderRight: '1px solid #e5e5e5',
            height: '100vh',
            position: 'sticky',
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem',
            boxShadow: '2px 0 5px rgba(0,0,0,0.02)'
        }}>
            <div style={{ marginBottom: '2.5rem', paddingLeft: '0.5rem' }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--foreground)' }}>
                    Rent&Return
                </Link>
            </div>

            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {MENU_ITEMS.map((item) => {
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
                                color: isActive ? 'var(--foreground)' : '#666',
                                backgroundColor: isActive ? 'var(--accent-light)' : 'transparent',
                                fontWeight: isActive ? 600 : 400,
                                transition: 'background-color 0.2s'
                            }}
                        >
                            <item.icon size={20} color={isActive ? 'var(--foreground)' : '#666'} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div style={{ marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {BOTTOM_ITEMS.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            color: '#666'
                        }}
                    >
                        <item.icon size={20} />
                        {item.name}
                    </Link>
                ))}
                <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    color: 'var(--error)',
                    background: 'none',
                    border: 'none',
                    marginTop: '0.5rem',
                    cursor: 'pointer'
                }}>
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    );
}
