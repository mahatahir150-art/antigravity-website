import Link from 'next/link';
import { Search, MapPin, Menu } from 'lucide-react';

export default function Header() {
    return (
        <header style={{
            padding: '1rem',
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--accent)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
            {/* 1. Logo */}
            <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--foreground)' }}>
                Rent&Return
            </Link>

            {/* 2. Middle: Search & Near Me (Desktop) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, maxWidth: '500px', margin: '0 1rem' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'white',
                    borderRadius: '24px',
                    padding: '0.5rem 1rem',
                    flex: 1,
                    border: '1px solid var(--accent-light)'
                }}>
                    <Search size={18} color="var(--accent)" />
                    <input
                        type="text"
                        placeholder="Search items..."
                        style={{
                            border: 'none',
                            outline: 'none',
                            marginLeft: '0.5rem',
                            flex: 1,
                            fontFamily: 'inherit'
                        }}
                    />
                </div>
                <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'var(--accent)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '0.5rem 1rem',
                    fontSize: '0.9rem'
                }}>
                    <MapPin size={16} style={{ marginRight: '0.25rem' }} />
                    Near Me
                </button>
            </div>

            {/* 3. Right: Auth / CTA */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Link href="/create" className="desktop-only" style={{
                    fontWeight: 600,
                    color: 'var(--foreground)'
                }}>
                    List Item
                </Link>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent-light)' }}></div>
            </div>
        </header>
    );
}
