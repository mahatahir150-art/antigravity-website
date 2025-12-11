export interface MLAnalysisResult {
    category: string;
    brand: string;
    titleSuggestion: string;
    priceSuggestion: number;
    condition: string;
    tags: string[];
}

export const analyzeImage = async (file: File): Promise<MLAnalysisResult> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In a real app, we'd send the file to Python/TensorFlow backend.
    // Here, we return mock data based on simple filename heuristics or random for demo.

    const filename = file.name.toLowerCase();

    if (filename.includes('camera') || filename.includes('dslr')) {
        return {
            category: 'Electronics',
            brand: 'Canon',
            titleSuggestion: 'Canon EOS DSLR Camera with Kit Lens',
            priceSuggestion: 2500,
            condition: 'Good',
            tags: ['photography', 'camera', 'canon', 'dslr']
        };
    }

    if (filename.includes('bike') || filename.includes('cycle')) {
        return {
            category: 'Sports',
            brand: 'Giant',
            titleSuggestion: 'Mountain Bike - 21 Speed',
            priceSuggestion: 500,
            condition: 'Excellent',
            tags: ['outdoor', 'cycling', 'bike']
        };
    }

    // Default fallback
    return {
        category: 'Home & Garden',
        brand: 'Generic',
        titleSuggestion: 'Item for Rent',
        priceSuggestion: 1000,
        condition: 'Good',
        tags: ['rental', 'local']
    };
};
