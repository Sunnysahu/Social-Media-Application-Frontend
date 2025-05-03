import React, { useRef, useEffect } from "react";

function PostEditorModal({ value, onChange, onClose, onPost, onImageUpload }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      const el = textareaRef.current;
      el.focus();
      el.selectionStart = el.selectionEnd = el.value.length; // 👈 Move cursor to end
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white/40 backdrop-blur-lg w-[90vw] h-[70vh] p-6 rounded-lg shadow-2xl flex flex-col gap-4">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={onChange}
          placeholder="Write your post..."
          className="flex-grow w-full p-4 border border-gray-300 rounded-lg resize-none outline-none"
        ></textarea>

        <div className="flex gap-4 justify-end">
          <button
            onClick={onImageUpload}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Upload Image
          </button>
          <button
            onClick={onPost}
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Post
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostEditorModal;
