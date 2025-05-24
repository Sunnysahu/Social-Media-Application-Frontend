import StoryLeftComponent from "../components/StoryLeftComponent";
import OnlineLayoutComponent from "../components/OnlineLayoutComponent";

import FriendsComponent from "../components/FriendsComponent";

function FriendPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row w-full lg:justify-between px-0 lg:px-8 gap-4">
        <StoryLeftComponent />

        <div className="w-full lg:w-[50%] flex justify-center">
          <FriendsComponent />
        </div>

        <OnlineLayoutComponent />
      </div>

      {/* Optional modal */}
      {/* {showModal && (
      <ModalComponent message="Logout Successfully" onClose={handleCloseModal} />
    )} */}
    </div>
  );
}

export default FriendPage;
