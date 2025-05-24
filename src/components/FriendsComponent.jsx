import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { data } from "../Dummy";

function FriendsComponent() {


  const navigate = useNavigate();


  const friend = data;
  return (
    <div className="w-full flex justify-center py-4 px-4 lg:w[50%]">
      <div className="w-full p-4 border-2 rounded-lg">
        <div className="w-full space-y-4">
          {friend.map((friends, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 w-full p-4 border rounded-lg bg-white shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-sm">{friends.profileImage}</span>
                </div>
                <div className="text-lg font-medium">{friends.name}</div>
              </div>

              <div className="flex flex-col sm:flex-row sm:space-x-3 w-full sm:w-auto items-center gap-2 sm:gap-0">
                <button className="w-full sm:w-auto px-3 py-1 bg-green-500 text-white rounded-md text-sm">
                  Add
                </button>
                <button className="w-full sm:w-auto px-3 py-1 bg-red-500 text-white rounded-md text-sm">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FriendsComponent;
