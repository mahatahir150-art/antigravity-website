'use client';

import { DUMMY_LISTINGS } from '@/lib/dummyData';
import Link from 'next/link';
import { Edit, Trash2 } from 'lucide-react';

export default function MyItemsPage() {
    // Use first 3 items as "My Listings"
    const mcListings = DUMMY_LISTINGS.slice(0, 3);

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <h1 style={{ color: 'var(--foreground)' }}>My Listed Products</h1>
                <Link href="/create" style={{ padding: '0.75rem 1.5rem', backgroundColor: 'var(--accent)', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
                    + Add New Listing
                </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {mcListings.map(item => (
                    <div key={item.id} style={{ backgroundColor: 'var(--white)', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eee', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                        <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                            <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'rgba(255,255,255,0.9)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', color: 'green' }}>
                                Active
                            </div>
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{ margin: '0 0 0.5rem 0' }}>{item.title}</h3>
                            <p style={{ color: 'var(--accent)', fontWeight: 'bold', marginBottom: '1rem' }}>Rs. {item.pricePerDay} / day</p>

                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <button style={{ flex: 1, padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', border: '1px solid #ccc', borderRadius: '6px', background: 'white', cursor: 'pointer' }}>
                                    <Edit size={16} /> Edit
                                </button>
                                <button style={{ padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #fee2e2', borderRadius: '6px', background: '#fff5f5', color: '#c53030', cursor: 'pointer' }}>
                                    <Trash2 size={16} />
                                </button>
                            </div>

                            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #eee', textAlign: 'center' }}>
                                <Link href="/dashboard/track" style={{ fontSize: '0.9rem', color: '#666', textDecoration: 'underline' }}>
                                    View QR & Tracking
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
