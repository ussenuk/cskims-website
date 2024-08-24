import React, { useState } from 'react';
import Image1 from '../Images/a.jpg';
import Image2 from '../Images/b.jpg';
import Image3 from '../Images/c.jpg';
import Image4 from '../Images/e.jpg';
import Image5 from '../Images/f.jpg';
import Image6 from '../Images/registration.jpeg';
import Image7 from '../Images/1.jpg';
import Image8 from '../Images/2.jpg';
import Image9 from '../Images/3.jpg';
import Image10 from '../Images/4.jpeg';
import ImageModal from './ImageModal';

export default function Grid() {
    const images = [Image5, Image6, Image3, Image1, Image2, Image4, Image7, Image8, Image9, Image10]; // Array of images
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div>
            <div className="grid grid-cols-3 grid-rows-2  gap-2">
                <div className="bg-gray-200 p-4" onClick={() => handleImageClick(0)}>
                    <img src={Image5} alt="" className="w-full h-full object-cover cursor-pointer" />
                </div>
                <div className="col-span-2 bg-[#332D2D] p-4" onClick={() => handleImageClick(1)}>
                    <img src={Image6} alt="" className="w-full h-full object-cover cursor-pointer" />
                </div>
                <div className="bg-gray-200 p-2" onClick={() => handleImageClick(2)}>
                    <img src={Image3} alt="" className="w-full h-full object-cover cursor-pointer" />
                </div>
                <div className="bg-gray-300 p-2" onClick={() => handleImageClick(3)}>
                    <img src={Image1} alt="" className="w-full h-full object-cover cursor-pointer" />
                </div>
                <div className="bg-gray-200 p-2" onClick={() => handleImageClick(4)}>
                    <img src={Image2} alt="" className="w-full h-full object-cover cursor-pointer" />
                </div>
            </div>

            {/* Modal to show selected image */}
            <ImageModal 
                isOpen={isModalOpen} 
                image={images[currentIndex]} 
                onClose={handleCloseModal} 
                onPrevious={handlePrevious}
                onNext={handleNext}
            />
        </div>
    );
}
