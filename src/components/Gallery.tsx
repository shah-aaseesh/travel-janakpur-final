import React, { useState, useEffect } from "react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const images: GalleryImage[] = [
    { id: 1, src: "/gallery/optimized/DJI_20250521124521_0080_D.webp", alt: "Beautiful Janakpur temple architecture" },
    { id: 2, src: "/gallery/optimized/DSC00353.webp", alt: "Traditional Mithila art and culture" },
    { id: 3, src: "/gallery/optimized/DSC00603.webp", alt: "Sacred rituals at Janaki Temple" },
    { id: 4, src: "/gallery/optimized/DSC00657_copy.webp", alt: "Pilgrims visiting Janakpur heritage sites" },
    { id: 5, src: "/gallery/optimized/DSC00661_copy.webp", alt: "Cultural celebration in Janakpur" },
    { id: 6, src: "/gallery/optimized/DSC00685_copy.webp", alt: "Local Mithila artisan at work" },
    { id: 7, src: "/gallery/optimized/DSC02366.webp", alt: "Scenic view of Janakpur city" },
    { id: 8, src: "/gallery/optimized/DSC02408.webp", alt: "Traditional festival in Janakpur" },
    { id: 9, src: "/gallery/optimized/DSC03364_copy.webp", alt: "Group tour at heritage site" },
    { id: 10, src: "/gallery/optimized/DSC03366_copy.webp", alt: "Mithila painting workshop" },
    { id: 11, src: "/gallery/optimized/DSC03369_copy.webp", alt: "Sacred pond and temple grounds" },
    { id: 12, src: "/gallery/optimized/DSC03379_copy.webp", alt: "Cultural heritage tour experience" },
    { id: 13, src: "/gallery/optimized/DSC03444_copy.webp", alt: "Tourists exploring Janakpur" },
    { id: 14, src: "/gallery/optimized/DSC03453_copy.webp", alt: "Local guide with visitors" },
    { id: 15, src: "/gallery/optimized/DSC2093.webp", alt: "Traditional architecture and design" },
    { id: 16, src: "/gallery/optimized/DSC2249.webp", alt: "Traditional architecture and design" },
    { id: 17, src: "/gallery/optimized/DSC_2077.webp", alt: "Traditional architecture and design" },
    { id: 18, src: "/gallery/optimized/DSC_4986 (1).webp", alt: "Traditional architecture and design" },
    { id: 19, src: "/gallery/optimized/DSC_7455.webp", alt: "Traditional architecture and design" },
    { id: 20, src: "/gallery/optimized/DSC_7480.webp", alt: "Traditional architecture and design" },
    { id: 21, src: "/gallery/optimized/DSC_7483.webp", alt: "Traditional architecture and design" },
    { id: 22, src: "/gallery/optimized/DSC_7501.webp", alt: "Traditional architecture and design" },
    { id: 23, src: "/gallery/optimized/DSC_7552 (1).webp", alt: "Traditional architecture and design" },
    { id: 24, src: "/gallery/optimized/DSC_7564.webp", alt: "Traditional architecture and design" },
    { id: 25, src: "/gallery/optimized/DSC_7589 (1).webp", alt: "Traditional architecture and design" },
    { id: 26, src: "/gallery/optimized/DSC_7615.webp", alt: "Traditional architecture and design" },
    { id: 27, src: "/gallery/optimized/DSC_9642.webp", alt: "Traditional architecture and design" },
    { id: 28, src: "/gallery/optimized/DSC_9692.webp", alt: "Traditional architecture and design" },
    { id: 29, src: "/gallery/optimized/IMG_0765.webp", alt: "Traditional architecture and design" },
    { id: 30, src: "/gallery/optimized/IMG_0884(1).webp", alt: "Traditional architecture and design" },
    { id: 31, src: "/gallery/optimized/IMG_20210603_013113 (2).webp", alt: "Traditional architecture and design" },
    { id: 32, src: "/gallery/optimized/IMG_7898.webp", alt: "Traditional architecture and design" },
    { id: 33, src: "/gallery/optimized/_DSC6302.webp", alt: "Traditional architecture and design" },
    { id: 34, src: "/gallery/optimized/_DSC6345.webp", alt: "Traditional architecture and design" },
    { id: 35, src: "/gallery/optimized/_DSC6359.webp", alt: "Traditional architecture and design" },
    { id: 36, src: "/gallery/optimized/_DSC6366.webp", alt: "Traditional architecture and design" },
    { id: 37, src: "/gallery/optimized/_DSC6995.webp", alt: "Traditional architecture and design" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<GalleryImage | null>(null);

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          return nextIndex >= images.length - 2 ? 0 : nextIndex;
        });
      }
    }, 5000); // Increased interval for smoother transitions
    return () => clearInterval(interval);
  }, [images.length, isTransitioning]);

  // Handle transition start/end
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition duration
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const goToPrevious = () => {
    if (!isTransitioning) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        return newIndex < 0 ? images.length - 3 : newIndex;
      });
    }
  };

  const goToNext = () => {
    if (!isTransitioning) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        return newIndex > images.length - 3 ? 0 : newIndex;
      });
    }
  };

  const openLightbox = (image: GalleryImage) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const lightboxPrevious = () => {
    if (!currentImage) return;
    const currentImageIndex = images.findIndex((img) => img.id === currentImage.id);
    const previousIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImage(images[previousIndex]);
  };

  const lightboxNext = () => {
    if (!currentImage) return;
    const currentImageIndex = images.findIndex((img) => img.id === currentImage.id);
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-mithila-cream">
      <div className="container mx-auto px-6">
        <h2 className="section-title pb-4">Photo Gallery</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Explore highlights from recent tours around Janakpur. Each image represents unique experiences and cultural treasures waiting to be discovered.
        </p>

        {/* Main Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-xl shadow-xl bg-white p-4">
            {/* Visible slides container */}
            <div 
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {images.map((image) => (
                <div key={image.id} className="w-1/3 flex-none">
                  <div 
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                    onClick={() => openLightbox(image)}
                  >
                    <div className="relative pt-[75%]">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-2 sm:p-3 font-medium text-xs sm:text-sm leading-tight">{image.alt}</p>
                    </div>
                    <div className="absolute top-2 right-2 bg-mithila-red text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-mithila-indigo p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-mithila-indigo p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Lightbox */}
        {lightboxOpen && currentImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
            <div className="relative w-full h-full flex flex-col">
              <button
                className="absolute top-4 right-4 text-white hover:text-mithila-red bg-black/50 rounded-full p-3"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-mithila-red z-20 bg-black/50 rounded-full p-3"
                onClick={lightboxPrevious}
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex-1 flex justify-center items-center p-8">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-h-full max-w-full object-contain rounded-lg"
                />
              </div>
              
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-mithila-red z-20 bg-black/50 rounded-full p-3"
                onClick={lightboxNext}
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-center bg-black/50 p-4 rounded-lg">
                <p className="text-lg font-medium">{currentImage.alt}</p>
                <p className="text-sm text-gray-300 mt-1">
                  {images.findIndex(img => img.id === currentImage.id) + 1} of {images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
