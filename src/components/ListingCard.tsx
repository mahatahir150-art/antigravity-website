import Link from 'next/link';
import { Listing } from '@/lib/dummyData';

export default function ListingCard({ item }: { item: Listing }) {
    return (
        <Link
            href={`/listings/${item.id}`}
            style={{
                display: 'flex',
                border: '1px solid #ddd',
                borderRadius: '8px',
                overflow: 'hidden',
                marginBottom: '1rem',
                backgroundColor: 'var(--white)',
                color: 'inherit'
            }}
        >
            <div style={{ width: '120px', height: '120px', flexShrink: 0 }}>
                <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
            <div style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {item.category}
                </div>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: 'var(--foreground)' }}>
                    {item.title}
                </h3>
                <div style={{ fontWeight: 'bold', color: 'var(--accent)' }}>
                    Rs. {item.pricePerDay} <span style={{ fontSize: '0.8rem', fontWeight: 400, color: '#444' }}>/day</span>
                </div>
            </div>
        </Link>
    );
}
