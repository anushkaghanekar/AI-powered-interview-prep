import React from 'react';

const Modal = ({ children, isOpen, onClose, title, hideHeader }) => {
  if (!isOpen) return null;
  console.log("🔍 Modal rendered. isOpen =", isOpen);
  console.log("🧱 Modal children:", children);


  return ( <div className="fixed inset-0 z-40 flex items-center justify-center ">
    { /* Modal Content */ }
    <div
      className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-[90vw] max-w-md max-h-[90vh]"
      >

        { /* Modal Header */ }
        {!hideHeader && (
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="md:text-lg font-medium text-gray-900">{title}</h3>
            </div>
        )}

        <button
          type="button"
          className="absolute top-3.5 right-3.5 text-gray-400 hover:bg-orange-100 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center cursor-pointer"
          onClick={onClose}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>  
        </button>

        {/* Modal Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
          {children}
        </div>
      </div>
  </div>
  );
};

export default Modal;












































