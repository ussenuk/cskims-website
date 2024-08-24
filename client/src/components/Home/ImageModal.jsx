import React from 'react';

export default function ImageModal({ isOpen, image, onClose, onPrevious, onNext }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-xl w-full max-h-[80%]">
                <img src={image} alt="Selected" className="w-full h-auto rounded" />

                <button 
                    className="absolute top-2 right-2 text-white bg-orange-500 p-2 rounded-full"
                    onClick={onClose}
                >
                    Close
                </button>

                <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-orange-500 p-2 rounded-full"
                    onClick={onPrevious}
                >
                    &lt; {/* Left Arrow */}
                </button>

                <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-orange-500 p-2 rounded-full"
                    onClick={onNext}
                >
                    &gt; {/* Right Arrow */}
                </button>
            </div>
        </div>
    );
}
