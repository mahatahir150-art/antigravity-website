'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, PlusCircle, QrCode, MessageSquare, User } from 'lucide-react';

const NAV_ITEMS = [
    { name: 'Home', icon: Home, href: '/dashboard' },
    { name: 'List', icon: PlusCircle, href: '/create' }, // Direct link to create
    { name: 'QR', icon: QrCode, href: '/dashboard/track' },
    { name: 'Inbox', icon: MessageSquare, href: '/dashboard/messages' },
    { name: 'Profile', icon: User, href: '/dashboard/profile' },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <nav style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'var(--white)',
            borderTop: '1px solid #e5e5e5',
            display: 'flex',
            justifyContent: 'space-around',
            padding: '0.75rem 0.5rem',
            zIndex: 1000,
            boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
        }}>
            {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || (item.name === 'List' && pathname === '/create');
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '4px',
                            color: isActive ? 'var(--foreground)' : '#999',
                            fontSize: '0.75rem',
                            flex: 1
                        }}
                    >
                        <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                        {item.name}
                    </Link>
                );
            })}
        </nav>
    );
}
