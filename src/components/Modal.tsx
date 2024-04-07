import React from "react";

const Modal = ({ displayImage, prevImage, nextImage, closeModal }: any) => {
  const { src, alt, name } = displayImage;
  return (
    <div
      id='modal'
      className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='relative p-4 w-full max-w-2xl max-h-full'>
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <div className='flex items-center justify-between p-3 md:p-3 border-b rounded-t dark:border-gray-600'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
              {name}
            </h3>
            <button
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-hide='default-modal'
              onClick={() => closeModal()}>
              <svg
                className='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>

          <div className='p-4 md:p-5 space-y-4 m-auto'>
            <img
              src={src}
              alt={alt}
              style={{ height: "400px", margin: "auto" }}
            />
          </div>

          <div className='flex items-center justify-end p-4 md:p-3 border-t border-gray-200 rounded-b dark:border-gray-600'>
            <button
              onClick={nextImage}
              data-modal-hide='default-modal'
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Prev
            </button>
            <button
              onClick={prevImage}
              data-modal-hide='default-modal'
              type='button'
              className='py-2.5 px-5 ms-3 text-sm text-white font-medium bg-blue-700 hover:bg-blue-800 rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700  dark:border-gray-600 dark:hover:text-white '>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
