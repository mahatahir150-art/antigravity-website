'use client';

import { DUMMY_LISTINGS } from '@/lib/dummyData';
import Link from 'next/link';

export default function MyRentalsPage() {
    // Mock rentals using dummy data
    const activeRentals = DUMMY_LISTINGS.slice(0, 1);
    const historyRentals = DUMMY_LISTINGS.slice(1, 3);

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '2rem', color: 'var(--foreground)' }}>My Rentals</h1>

            <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#444' }}>Active Now</h2>
            <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                {activeRentals.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: 'var(--white)', borderRadius: '12px', border: '1px solid #bed3f3', boxShadow: '0 2px 4px rgba(59, 130, 246, 0.1)' }}>
                        <img src={item.image} alt={item.title} style={{ width: '120px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h3 style={{ margin: '0 0 0.5rem 0' }}>{item.title}</h3>
                                <span style={{ color: '#3182ce', fontWeight: 'bold', fontSize: '0.9rem', backgroundColor: '#ebf8ff', padding: '2px 8px', borderRadius: '4px' }}>Active</span>
                            </div>
                            <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>Rented from <strong>Ali Khan</strong></p>
                            <p style={{ color: '#666', fontSize: '0.9rem' }}>Return due: <strong>Tomorrow</strong></p>

                            <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem' }}>
                                <button style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', backgroundColor: 'var(--foreground)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Extend Rent</button>
                                <Link href={`/listings/${item.id}`} style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', border: '1px solid #ccc', borderRadius: '6px', textDecoration: 'none', color: '#333' }}>View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#444' }}>History</h2>
            <div style={{ display: 'grid', gap: '1rem', opacity: 0.8 }}>
                {historyRentals.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: '12px', border: '1px solid #eee' }}>
                        <img src={item.image} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', filter: 'grayscale(100%)' }} />
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{item.title}</h3>
                                <span style={{ color: '#718096', fontSize: '0.85rem', backgroundColor: '#edf2f7', padding: '2px 8px', borderRadius: '4px' }}>Returned</span>
                            </div>
                            <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>Dec 2025</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
