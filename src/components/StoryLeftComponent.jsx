import { useState } from "react";

function StoryLeftComponent() {
  const [count, setCount] = useState([
    { number: 1, username: "alice" },
    { number: 2, username: "bob" },
    { number: 3, username: "charlie" },
    { number: 4, username: "david" },
    { number: 5, username: "emma" },
    { number: 6, username: "frank" },
    { number: 7, username: "grace" },
    { number: 8, username: "harry" },
    { number: 9, username: "isla" },
    { number: 10, username: "jack" },
  ]);

  return (
    <div className="hidden w-full sm:w-[90%] md:w-[60%] lg:w-[27%] ml-[2vw] lg:flex items-start">
      <div className="w-full flex flex-col gap-4 border border-black/50 rounded-xl shadow-2xl pb-1">

        <div className="w-full text-center mt-2">
          <h2 className="font-bold text-lg">Story</h2>
        </div>


        <div className="overflow-y-auto max-h-[60vh] px-[1vw] flex flex-col shadow-xl">
          {count.map((item, index) => (
            <div
              key={index}
              className=" w-full flex justify-between items-center mb-4 py-3 px-4 border border-black/40 rounded shadow-md"
            >
              {/* Left Section: Circle + Username */}
              <div className="flex items-center">
                <div className="flex justify-center items-center border-2 border-black rounded-full w-14 h-14 text-xs text-center mr-4 shrink-0">
                  {"Story " + item.number}
                </div>
                <div className="flex flex-col">
                  <p className="text-sm sm:text-base font-semibold">
                    {item.username}
                  </p>
                </div>
              </div>

              {/* Right Section: Story Count */}
              <div className="text-right bg text-sm sm:text-base whitespace-nowrap">
                {item.number + " Stories"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoryLeftComponent;
