
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type GalleryItem = {
  id: number;
  type: 'image' | 'video';
  thumbnail: string;
  url: string;
  alt: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=80',
    alt: 'Área de musculação'
  },
  {
    id: 2,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1637666062717-1856ad919600?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3Bpbm5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    url: 'https://images.unsplash.com/photo-1637666062717-1856ad919600?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3Bpbm5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80',
    alt: 'Sala de spinning'
  },
  {
    id: 3,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltJTIwd2VpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    url: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltJTIwd2VpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    alt: 'Área de peso livre'
  },
  {
    id: 4,
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltJTIwdmlkZW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    url: 'https://player.vimeo.com/video/180293809?autoplay=1&title=0&byline=0&portrait=0',
    alt: 'Tour pela academia'
  },
  {
    id: 5,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    alt: 'Área de treino funcional'
  },
  {
    id: 6,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFydGlhbCUyMGFydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFydGlhbCUyMGFydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80',
    alt: 'Área de artes marciais'
  }
];

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Conheça mais nossa academia</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer overflow-hidden rounded-lg relative group"
            >
              <img 
                src={item.thumbnail} 
                alt={item.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  {item.type === 'video' ? (
                    <>
                      <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <p className="mt-2 font-medium">Assistir vídeo</p>
                    </>
                  ) : (
                    <>
                      <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      <p className="mt-2 font-medium">Ampliar imagem</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
          <button 
            onClick={() => setSelectedItem(null)} 
            className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-70 rounded-full p-1"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {selectedItem?.type === 'video' ? (
            <div className="aspect-video w-full">
              <iframe 
                src={selectedItem.url} 
                className="w-full h-full" 
                frameBorder="0" 
                allow="autoplay; fullscreen" 
                allowFullScreen
                title={selectedItem.alt}
              ></iframe>
            </div>
          ) : (
            <img 
              src={selectedItem?.url} 
              alt={selectedItem?.alt} 
              className="w-full h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
