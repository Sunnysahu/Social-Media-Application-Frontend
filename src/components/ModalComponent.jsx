// ModalComponent.js
import React from 'react';

function ModalComponent({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[100]">
      <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white w-[70vw] lg:w-[90vw] max-w-md">
        <p className="text-red-700 font-semibold text-center">{message}</p>
        <div className="mt-4 flex justify-center">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
