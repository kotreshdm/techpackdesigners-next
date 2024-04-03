"use client";
import { useState } from "react";
import PortfolioGallery from "@/components/PortfolioGallery";
import Modal from "@/components/Modal";
import { useSelector } from "react-redux";

export default function PortfolioPage() {
  const { portfilio } = useSelector((state: any) => state.posts);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + portfilio.length) % portfilio.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfilio.length);
  };
  return (
    <div className='flex justify-center flex-wrap pages techpack'>
      <div className='w-full md:w-11/12 lg:w-11/12 p-2'>
        <h1 className='main-heading mb-4'>
          Apparel Design Studio | Tech Pack Designer | Manufacturer & Exporter
          of ReadyMade Garments
        </h1>
        <h1 className='main-heading mb-4'>Fashion Portfolio</h1>
        <p className='content'>
          Go ahead and check out our clothing designer portfolio and get in
          touch with us with your design requirements. We have showcased a few
          designs which should match your expected requirements. In the
          eventuality where you need something that has not been showcased,
          please feel free to get in touch with us; we’ll create it for you.
        </p>
        <div>
          <h5 className='sub-heading text-center'>
            Apparel | Accessory | Fabric Design Samples
          </h5>
          <div>
            <PortfolioGallery images={portfilio} openModal={openModal} />
            {modalOpen && (
              <Modal
                displayImage={portfilio[currentIndex]}
                prevImage={prevImage}
                nextImage={nextImage}
                closeModal={closeModal}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
