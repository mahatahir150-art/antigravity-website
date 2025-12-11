export interface Listing {
    id: string;
    title: string;
    pricePerDay: number;
    image: string;
    lat: number;
    lng: number;
    category: string;
    status?: 'active' | 'pending' | 'rejected'; // Added for Admin M4
}

export const DUMMY_LISTINGS: Listing[] = [
    {
        id: '1',
        title: 'Professional DSLR Camera',
        pricePerDay: 2500,
        image: 'https://placehold.co/600x400/800000/FFFFFF?text=Camera',
        lat: 24.8607,
        lng: 67.0011, // Karachi
        category: 'Electronics'
    },
    {
        id: '2',
        title: 'Mountain Bike',
        pricePerDay: 500,
        image: 'https://placehold.co/600x400/A64B4B/FFFFFF?text=Bike',
        lat: 24.8615,
        lng: 67.0050,
        category: 'Sports'
    },
    {
        id: '3',
        title: 'Drill Machine',
        pricePerDay: 300,
        image: 'https://placehold.co/600x400/333333/FFFFFF?text=Drill',
        lat: 24.8550,
        lng: 67.0200,
        category: 'Tools'
    },
    {
        id: '4',
        title: 'Gaming Console PS5',
        pricePerDay: 3000,
        image: 'https://placehold.co/600x400/555555/FFFFFF?text=PS5',
        lat: 24.8650,
        lng: 67.0100,
        category: 'Electronics'
    }
];
