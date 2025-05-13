import { useState } from "react";

function OnlineLayoutComponent() {
  const [active] = useState([
    { URL: "Some", name: "name1", lastSeen: "2h ago" },
    { URL: "Some", name: "name2", lastSeen: "5h ago" },
    { URL: "Some", name: "name3", lastSeen: "1d ago" },
    { URL: "Some", name: "name4", lastSeen: "online" },
    { URL: "Some", name: "name5", lastSeen: "3d ago" },
    { URL: "Some", name: "name6", lastSeen: "6h ago" },
    { URL: "Some", name: "name7", lastSeen: "12h ago" },
    { URL: "Some", name: "name8", lastSeen: "offline" },
    { URL: "Some", name: "name9", lastSeen: "Dead" },
    { URL: "Some", name: "name10", lastSeen: "gone" },
  ]);

  return (
    <div className="w-[27%] ml-[1vw] lg:flex items-start hidden">
      <div className="w-full flex flex-col gap-4 border border-black/50 rounded-xl shadow-2xl pb-1">

        <div className="w-full text-center mt-2">
          <h2 className="font-bold text-lg">Active</h2>
        </div>


        <div className="overflow-y-auto max-h-[60vh] px-[1vw] flex flex-col shadow-xl">
          {active.map((item, index) => (
            <div
              key={index}
              className="w-full flex items-center mb-[1.7vw] py-[1.8vh] border border-black/40 rounded shadow-md"
            >

              <div className="mx-[1vw] flex justify-center items-center border-2 border-black rounded-full w-14 h-14 text-xs text-center">
                {item.lastSeen}
              </div>


              <p className="text-base">
                <strong>{item.name}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OnlineLayoutComponent;
