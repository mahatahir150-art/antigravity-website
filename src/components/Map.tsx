'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { Listing } from '@/lib/dummyData';
import Link from 'next/link';

// Fix for default marker icon in leaflet with webpack
const icon = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

interface MapProps {
    listings: Listing[];
    center?: [number, number];
    zoom?: number;
}

export default function Map({ listings, center = [24.8607, 67.0011], zoom = 13 }: MapProps) {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {listings.map((item) => (
                    <Marker key={item.id} position={[item.lat, item.lng]} icon={icon}>
                        <Popup>
                            <div style={{ minWidth: '150px' }}>
                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
                                <h4 style={{ margin: '0.5rem 0', color: '#800000' }}>{item.title}</h4>
                                <p style={{ margin: 0 }}>Rs. {item.pricePerDay} / day</p>
                                <Link href={`/listings/${item.id}`} style={{ color: '#A64B4B', fontWeight: 'bold', fontSize: '0.9rem', display: 'block', marginTop: '0.5rem' }}>
                                    View Details
                                </Link>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
