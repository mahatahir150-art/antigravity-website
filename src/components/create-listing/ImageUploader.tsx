'use client';

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, Image as ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
    onImageSelected: (file: File) => void;
    isAnalyzing: boolean;
}

export default function ImageUploader({ onImageSelected, isAnalyzing }: ImageUploaderProps) {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            onImageSelected(acceptedFiles[0]);
        }
    }, [onImageSelected]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        multiple: false,
        disabled: isAnalyzing
    });

    return (
        <div
            {...getRootProps()}
            style={{
                border: '2px dashed var(--accent)',
                borderRadius: '12px',
                padding: '3rem',
                textAlign: 'center',
                backgroundColor: isDragActive ? '#fafafa' : 'var(--white)',
                cursor: isAnalyzing ? 'wait' : 'pointer',
                transition: 'all 0.2s',
                opacity: isAnalyzing ? 0.7 : 1
            }}
        >
            <input {...getInputProps()} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#666' }}>
                {isAnalyzing ? (
                    <>
                        <div className="spinner" style={{ marginBottom: '1rem' }}>Available Soon...</div>
                        <p>AI is analyzing your image...</p>
                    </>
                ) : (
                    <>
                        <UploadCloud size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                        <p style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                            {isDragActive ? "Drop verification photo here..." : "Drag & drop item photo"}
                        </p>
                        <p style={{ fontSize: '0.9rem' }}>or click to select file</p>
                        <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', backgroundColor: '#eee', padding: '0.25rem 0.75rem', borderRadius: '12px' }}>
                            Auto-fills details using AI
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
