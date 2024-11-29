'use client'
import Image from'next/image';

interface PhotoGridProps {
   photoPaths: string[];
   title?: string;
};

export default function PhotoGrid({ photoPaths, title }: PhotoGridProps) {
    return (
        <div className="mb-12">
            {title && <h2 className="text-2xl font-medium mb-6">{title}</h2>}
            <div className="grid grid-cols-3 gap-4">
                {photoPaths.map((path, index) => {
                    // Check if this is one of the last items that needs centering
                    const isLastRow = index >= photoPaths.length - (photoPaths.length % 3);
                    const needsCentering = photoPaths.length % 3 !== 0;
                    
                    return (
                        <div 
                            key={path} 
                            className={`aspect-square relative ${
                                isLastRow && needsCentering ? 'col-span-1 md:col-span-3' : ''
                            }`}
                            style={{
                                gridColumn: isLastRow && needsCentering ? 
                                    photoPaths.length % 3 === 1 ? '2' : '1 / 3' : 'auto'
                            }}
                        >
                            <Image
                                src={path}
                                alt={`Photo ${index + 1}`}
                                fill
                                className="object-cover rounded-lg hover:opacity-90 transition-opacity duration-300"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}