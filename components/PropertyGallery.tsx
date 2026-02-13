'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface PropertyGalleryProps {
  images: string[];
  propertyName: string;
  video?: string;
}

export default function PropertyGallery({ images, propertyName, video }: PropertyGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const displayImages = images.length > 0 ? images : ['/images/general/placeholder.webp'];
  const totalItems = displayImages.length;
  const maxVisibleThumbnails = 6;

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (thumbnailsRef.current) {
      const scrollAmount = 200;
      thumbnailsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    setShowVideo(false);
    setSelectedIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setShowVideo(false);
    setSelectedIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main Image/Video Container */}
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 group">
          {showVideo && video ? (
            <video
              controls
              autoPlay
              className="w-full h-full object-contain bg-black"
            >
              <source src={`${video}.webm`} type="video/webm" />
              <source src={`${video}.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <>
              <Image
                src={displayImages[selectedIndex]}
                alt={`${propertyName} - Image ${selectedIndex + 1}`}
                fill
                className="object-cover cursor-pointer"
                priority
                onClick={() => setIsLightboxOpen(true)}
              />

              {/* Navigation Arrows */}
              {totalItems > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Counter & Expand Button */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <span className="bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {selectedIndex + 1} / {totalItems}
                </span>
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  View All Photos
                </button>
              </div>
            </>
          )}
        </div>

        {/* Thumbnails Row */}
        <div className="relative">
          {/* Scroll Buttons */}
          {totalItems > maxVisibleThumbnails && (
            <>
              <button
                onClick={() => scrollThumbnails('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50"
                aria-label="Scroll thumbnails left"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollThumbnails('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50"
                aria-label="Scroll thumbnails right"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Thumbnails Container */}
          <div
            ref={thumbnailsRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide px-1 py-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Video Thumbnail */}
            {video && (
              <button
                onClick={() => setShowVideo(true)}
                className={`relative flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden ${
                  showVideo ? 'ring-2 ring-navy ring-offset-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <span className="absolute bottom-1 left-1 text-white text-xs font-medium bg-black/50 px-1.5 py-0.5 rounded">
                  Video
                </span>
              </button>
            )}

            {/* Image Thumbnails */}
            {displayImages.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setShowVideo(false);
                  setSelectedIndex(index);
                }}
                className={`relative flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden transition-all ${
                  selectedIndex === index && !showVideo
                    ? 'ring-2 ring-navy ring-offset-2'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={image}
                  alt={`${propertyName} - Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black z-50 flex flex-col"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Header */}
          <div className="flex justify-between items-center p-4 text-white">
            <span className="font-medium">
              {propertyName} - {selectedIndex + 1} of {totalItems}
            </span>
            <button
              className="w-10 h-10 hover:bg-white/10 rounded-full flex items-center justify-center"
              onClick={() => setIsLightboxOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Lightbox Main Image */}
          <div className="flex-1 flex items-center justify-center relative px-16" onClick={(e) => e.stopPropagation()}>
            {totalItems > 1 && (
              <>
                <button
                  className="absolute left-4 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="absolute right-4 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            <div className="relative w-full max-w-6xl h-[70vh]">
              <Image
                src={displayImages[selectedIndex]}
                alt={`${propertyName} - Image ${selectedIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Lightbox Thumbnails */}
          <div className="p-4">
            <div className="flex gap-2 justify-center overflow-x-auto">
              {displayImages.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(index);
                  }}
                  className={`relative flex-shrink-0 w-16 h-12 rounded overflow-hidden transition-all ${
                    selectedIndex === index
                      ? 'ring-2 ring-white'
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
