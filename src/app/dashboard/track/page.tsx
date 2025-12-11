'use client';

import Header from '@/components/Header';
import QRGenerator from '@/components/qr/QRGenerator';
import { DUMMY_LISTINGS } from '@/lib/dummyData';
import { MapPin, Clock } from 'lucide-react';

export default function TrackPage() {
    // Use first 2 listings as "My Tracked Items" for demo
    const trackedItems = DUMMY_LISTINGS.slice(0, 2);

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--foreground)' }}>Track My Products</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {trackedItems.map((item) => (
                    <div key={item.id} style={{ backgroundColor: 'var(--white)', borderRadius: '12px', padding: '1.5rem', border: '1px solid #eee', boxShadow: '0 2px 5px rgba(0,0,0,0.03)' }}>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                            <img src={item.image} alt={item.title} style={{ width: '64px', height: '64px', borderRadius: '8px', objectFit: 'cover' }} />
                            <div>
                                <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>{item.title}</h3>
                                <span style={{ fontSize: '0.8rem', color: '#666', background: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>Rented Out</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0' }}>
                            <div style={{ textAlign: 'center' }}>
                                <QRGenerator value={`http://localhost:3000/listings/${item.id}`} size={100} />
                                <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#999' }}>Scan to update status</p>
                            </div>
                        </div>

                        <div style={{ borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                <MapPin size={16} color="var(--accent)" />
                                <span>Current Location: <strong>Defense, Karachi</strong></span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                                <Clock size={16} color="var(--accent)" />
                                <span>Return due: <strong>2 days</strong></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
