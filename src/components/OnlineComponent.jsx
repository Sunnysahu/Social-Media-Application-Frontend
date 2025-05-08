import { useState } from "react";

function OnlineComponent() {
  const [active] = useState([
    { URL: "Some", name: "name1", lastSeen: "2h ago" },
    { URL: "Some", name: "name2", lastSeen: "5h ago" },
    { URL: "Some", name: "name3", lastSeen: "1d ago" },
    { URL: "Some", name: "name4", lastSeen: "online" },
    { URL: "Some", name: "name5", lastSeen: "3d ago" },
    { URL: "Some", name: "name6", lastSeen: "6h ago" },
    { URL: "Some", name: "name7", lastSeen: "12h ago" },
    { URL: "Some", name: "name8", lastSeen: "offline" },
  ]);

  return (
<div className="w-full ml-[2vw] flex items-start">
  <div className="w-full flex flex-col gap-4 border border-black/50 rounded-xl shadow-2xl pb-[0.3vh]">
    <div className="w-full text-center mt-2">
      <h2 className="font-bold text-lg">Active</h2>
    </div>


    <div className="overflow-y-auto max-h-[60vh] px-[1vw] flex flex-col shadow-xl">
      {active.map((item, index) => (
        <div
          key={index}
          className="w-full flex items-center justify-between bg-gray-200 mb-[1.7vw] py-[1.8vh] px-4 border border-black/40 rounded shadow-md"
        >
          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center border-2 border-black rounded-full w-12 h-12 text-xs text-center">
              🟢
            </div>
            <p className="text-base font-semibold">{item.name}</p>
          </div>


          <p className="text-sm text-gray-700 pl-[1vw]">{item.lastSeen}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}

export default OnlineComponent;
