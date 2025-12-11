'use client';

import dynamic from 'next/dynamic';
import { DUMMY_LISTINGS } from '@/lib/dummyData';
import ListingCard from '@/components/ListingCard';
import Header from '@/components/Header';

// Dynamic import for Leaflet Map to avoid SSR issues
const Map = dynamic(() => import('@/components/Map'), {
    ssr: false,
    loading: () => <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ddd' }}>Loading Map...</div>
});

export default function BrowsePage() {
    return (
        <>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 70px)' }}> {/* Subtract header height roughly */}

                {/* Mobile: Map on top (half height), List on bottom. Desktop: Side by side */}
                <div className="browse-container" style={{ display: 'flex', flex: 1, flexDirection: 'column', height: '100%' }}>

                    {/* Map Section */}
                    <div style={{ flex: 1, minHeight: '50%', position: 'relative' }}>
                        <Map listings={DUMMY_LISTINGS} />

                        {/* Float helper for "Near Me" if needed, or rely on Header */}
                    </div>

                    {/* List Section */}
                    <div style={{
                        flex: 1,
                        overflowY: 'auto',
                        padding: '1rem',
                        backgroundColor: '#fafafa',
                        borderTop: '1px solid #ccc'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h2 style={{ fontSize: '1.25rem', color: 'var(--foreground)' }}>Nearby Items</h2>
                            <span style={{ fontSize: '0.9rem', color: '#666' }}>{DUMMY_LISTINGS.length} results</span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {DUMMY_LISTINGS.map(item => (
                                <ListingCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (min-width: 768px) {
          .browse-container {
            flex-direction: row !important;
          }
          .browse-container > div:first-child { /* Map */
            flex: 2 !important; 
            order: 2;
          }
          .browse-container > div:last-child { /* List */
            flex: 1 !important;
            order: 1;
            max-width: 400px;
            border-top: none !important;
            border-right: 1px solid #ccc;
          }
        }
      `}</style>
        </>
    );
}
