import { useState } from "react";

function StorylayoutPCComponent() {
  const [stories] = useState([
    { URL: "Some URL", Username: "username1", Storycount: 2 },
    { URL: "Some URL", Username: "username2", Storycount: 3 },
    { URL: "Some URL", Username: "username3", Storycount: 1 },
    { URL: "Some URL", Username: "username4", Storycount: 4 },
    { URL: "Some URL", Username: "username5", Storycount: 2 },
    { URL: "Some URL", Username: "username6", Storycount: 5 },
    { URL: "Some URL", Username: "username7", Storycount: 2 },
    { URL: "Some URL", Username: "username8", Storycount: 1 },
    { URL: "Some URL", Username: "username9", Storycount: 9 },
  ]);

  return (
    <div className="w-full mr-[2vw] flex items-start">
      <div className="w-full flex flex-col gap-4 border border-black/50 rounded-xl shadow-2xl pb-1">
        <div className="w-full text-center mt-2">
          <h2 className="font-bold text-lg">Stories</h2>
        </div>
        <div className="overflow-y-auto max-h-[60vh] px-[1vw] flex flex-col shadow-xl">
          {stories.map((item, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-between mb-[1.7vw] py-[1.4vh] px-4 border border-black/40 rounded shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center border-2 border-black rounded-full aspect-square w-12 min-w-[3rem] max-w-[3rem] text-sm">
                  {item.Storycount}
                </div>

                <p className="text-base">
                  <strong>{item.Username}</strong> - {item.Storycount} stories
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StorylayoutPCComponent;
