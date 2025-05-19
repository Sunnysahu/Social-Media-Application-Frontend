import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import ModalComponent from "../components/ModalComponent";


function LogoutPage() {

  const [showModal, setShowModal] = useState(true);

  const navigate = useNavigate()
  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/")
  };

  return (
    <div>
     {/* Show modal only when showModal is true */}
     {showModal && (
        <ModalComponent message="Logout Successfully" onClose={handleCloseModal} />
      )}

     <Link to="/">Go Back</Link>
    </div>
  )
}

export default LogoutPage
