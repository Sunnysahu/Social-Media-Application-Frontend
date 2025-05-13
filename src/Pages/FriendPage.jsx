import { useState } from "react";

import { useNavigate } from "react-router-dom";
import ModalComponent from "../components/ModalComponent";

function FriendPage() {
  const [showModal, setShowModal] = useState(true);

  const navigate = useNavigate()

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/home")
  };

  return (
    <div>
      <h1>Hi</h1>

      {/* Show modal only when showModal is true */}
      {showModal && (
        <ModalComponent message="Logout Successfully" onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default FriendPage;
