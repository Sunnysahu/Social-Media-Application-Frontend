import React, { useState } from "react";
import InputComponent from "./InputComponent";
import SubmitComponent from "./SubmitComponent";
import ModalComponent from "./ModalComponent";
import PostEditorModal from "./PostEditorModal";



function NewPostComponent() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [text, setText] = useState("");
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const handleInputChange = (event) => setText(event.target.value);

  const handleSubmit = () => {
    console.log("Here");
    
    if (text.trim() === "") {
      setModalMessage("Post content cannot be empty!");
      setShowModal(true);
    } else {
      console.log("Post submitted:", text);
      setText("");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  const handleEditorClose = () => setIsEditorOpen(false);

  const handleInputClick = () => setIsEditorOpen(true);

  const handleImageUpload = () => {
    alert("Image upload logic.");
  };

  const handlepost = () => {
    alert("API call for Posting")
  }

  return (
    <div className="w-full px-[4vw] py-[5vw] pb-[10px] lg:py-0 flex flex-col items-start lg:items-center">
      <div className="flex lg:hidden w-full max-w-2xl p-2 lg:w-[40vw] lg:border-2 shadow-lg rounded-lg flex-col lg:flex-row lg:justify-around items-center gap-5">

        <InputComponent
          placeholder="Type your post here..."
          classname="w-full p-2 flex text-center border-2 rounded-l border-black lg:border-0 lg:focus:outline-none lg:focus:border-none sm:border-2 sm:border-green"
          value={text}
          onChange={handleInputChange}
          onClick={handleInputClick}
        />
        <SubmitComponent onClick={handleSubmit}  />

        <ModalComponent message={modalMessage} onClose={handleCloseModal} />
        {isEditorOpen && (
          <PostEditorModal
            value={text}
            onChange={handleInputChange}
            onClose={handleEditorClose}
            onPost={handlepost}
            onImageUpload={handleImageUpload}
          />
        )}
      </div>
    </div>
  );
}

export default NewPostComponent;
