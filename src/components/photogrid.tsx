'use client'
import Image from 'next/image';

interface PhotoGridProps {
   photoPaths: string[];
   title?: string;
};

export default function PhotoGrid({ photoPaths, title }: PhotoGridProps) {
    return (
        <div className="mb-12 w-full">
            {title && <h2 className="text-2xl font-medium mb-6 text-center lg:text-left">{title}</h2>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {photoPaths.map((path, index) => {
                    const isLastRow = index >= photoPaths.length - (photoPaths.length % 3);
                    const needsCentering = photoPaths.length % 3 !== 0;

                    return (
                        <div 
                            key={path} 
                            className={`aspect-square relative ${isLastRow && needsCentering ? 'lg:col-span-3' : ''}`}
                            style={{
                                gridColumn: isLastRow && needsCentering ? 
                                    (photoPaths.length % 3 === 1 ? 'auto' : 'auto') : 'auto'
                            }}
                        >
                            <Image
                                src={path}
                                alt={`Photo ${index + 1}`}
                                fill
                                className="object-cover rounded-lg hover:opacity-90 transition-opacity duration-300"
                                sizes="(max-width: 640px) 100vw, 
                                       (max-width: 1024px) 50vw,
                                       33vw"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}