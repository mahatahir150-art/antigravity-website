'use client';

import { QRCodeCanvas } from 'qrcode.react';
import { useRef } from 'react';
import { Download } from 'lucide-react';

interface QRGeneratorProps {
    value: string;
    size?: number;
}

export default function QRGenerator({ value, size = 128 }: QRGeneratorProps) {
    const canvasRef = useRef<HTMLDivElement>(null);

    const downloadQR = () => {
        const canvas = canvasRef.current?.querySelector('canvas');
        if (canvas) {
            const url = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = url;
            link.download = `qr-${value}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div ref={canvasRef} style={{ padding: '10px', background: 'white', borderRadius: '8px', border: '1px solid #eee' }}>
                <QRCodeCanvas value={value} size={size} level="H" />
            </div>
            <button
                onClick={downloadQR}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    background: 'transparent',
                    cursor: 'pointer'
                }}
            >
                <Download size={16} /> Download
            </button>
        </div>
    );
}
