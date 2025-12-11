'use client';

import { useState } from 'react';
import { DUMMY_LISTINGS, Listing } from '@/lib/dummyData';
import { Check, X, Eye } from 'lucide-react';

export default function ModerationQueue() {
    // Simulate fetching pending items (filtering dummy data or adding mock pending status)
    const [pendingItems, setPendingItems] = useState([
        ...DUMMY_LISTINGS.map(i => ({ ...i, status: 'active' })), // Existing are active
        {
            id: 'p1',
            title: 'Gaming Laptop RTX 3060',
            pricePerDay: 4000,
            image: 'https://placehold.co/600x400/111/FFF?text=Laptop',
            lat: 24.87,
            lng: 67.03,
            category: 'Electronics',
            status: 'pending' as const
        },
        {
            id: 'p2',
            title: 'Camping Tent (4 Person)',
            pricePerDay: 1500,
            image: 'https://placehold.co/600x400/228B22/FFF?text=Tent',
            lat: 24.88,
            lng: 67.04,
            category: 'Sports',
            status: 'pending' as const
        }
    ].filter(i => i.status === 'pending'));

    const handleAction = (id: string, action: 'approve' | 'reject') => {
        // In real app, API call here.
        setPendingItems(prev => prev.filter(i => i.id !== id));
        alert(`Listing ${action}d successfully.`);
    };

    return (
        <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1a202c' }}>Moderation Queue</h1>

            {pendingItems.length === 0 ? (
                <div style={{ padding: '3rem', textAlign: 'center', backgroundColor: 'white', borderRadius: '8px' }}>
                    <h3>🎉 All caught up!</h3>
                    <p style={{ color: '#718096' }}>No active listings awaiting approval.</p>
                </div>
            ) : (
                <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead style={{ backgroundColor: '#f7fafc', borderBottom: '1px solid #e2e8f0' }}>
                            <tr>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#4a5568' }}>Item</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#4a5568' }}>Category</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#4a5568' }}>Price/Day</th>
                                <th style={{ padding: '1rem', textAlign: 'right', color: '#4a5568' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingItems.map((item) => (
                                <tr key={item.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <img src={item.image} alt={item.title} style={{ width: '48px', height: '48px', borderRadius: '4px', objectFit: 'cover' }} />
                                            <span style={{ fontWeight: 500 }}>{item.title}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem', color: '#4a5568' }}>{item.category}</td>
                                    <td style={{ padding: '1rem', fontWeight: 'bold' }}>Rs. {item.pricePerDay}</td>
                                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                                            <button title="View" style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e0', background: 'white', cursor: 'pointer' }}>
                                                <Eye size={16} color="#4a5568" />
                                            </button>
                                            <button
                                                onClick={() => handleAction(item.id, 'approve')}
                                                title="Approve"
                                                style={{ padding: '0.5rem', borderRadius: '4px', border: 'none', background: '#48bb78', color: 'white', cursor: 'pointer' }}
                                            >
                                                <Check size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleAction(item.id, 'reject')}
                                                title="Reject"
                                                style={{ padding: '0.5rem', borderRadius: '4px', border: 'none', background: '#f56565', color: 'white', cursor: 'pointer' }}
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
