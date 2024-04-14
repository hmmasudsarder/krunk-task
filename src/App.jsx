import { VscSettings, VscVerifiedFilled } from "react-icons/vsc";
import imageavto from "./assets/images/image.jpg";
import Bag from "./components/Bag";
import Chat from "./components/Chat";
import ChatSecound from "./components/ChatSecound";
import Tag from "./components/Tag";
import { FaChevronRight } from "react-icons/fa";

function App() {
  return (
    <div>
      <div className="bg-amber-100 w-full h-auto py-20">
        <div className="w-5/12 h-auto border-l-teal-50  rounded-lg border-4 border-white mx-auto">
          <div className="flex justify-between">
            {/* header component  */}
            <div className="flex items-center justify-between gap-3 w-[300px] bg-amber-100">
              <img
                className="rounded-full w-1 flex-1 py-3 ml-1"
                src={imageavto}
                alt=""
              />
              <div className="badge badge-success badge-sm -ml-8 mt-16"></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mt-4">
                  <h1 className="text-2xl text-blue-500 -mt-4">Timpu</h1>
                  <VscVerifiedFilled className="text-orange-400 text-xl" />
                </div>
                <p className="font-semibold text-blue-500 w-full mt-1">
                  Chat assistant
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center px-6 gap-2">
              <div className="badge badge-success badge-sm"></div>
              <h1>online</h1>
            </div>
          </div>
          <div className="bg-white">
            {/* chatt components  */}
            <div className="flex items-center justify-between gap-3 w-[300px]">
              <Chat />
              <div className="pt-72">
                <ChatSecound />
              </div>
            </div>
            <div className="mt-10 ml-4">
              <h1 className="text-neutral-500 font-semibold pb-4">
                Popular tags for handbag
              </h1>
              <div className="pb-4">
                <Tag />
              </div>
            </div>
            <div className="">
              <Bag />
            </div>
            <div className="flex items-center justify-between gap-10 pt-4">
              <h1 className="text-neutral-500 font-semibold pb-4 ml-4">
                Select filters
              </h1>
              <div className="flex items-center gap-2">
                <VscSettings className="text-2xl text-neutral-500" />
                <h1 className="font-semibold mr-2 text-neutral-500">Filter</h1>
              </div>
            </div>
            <div className="flex gap-2 px-4 mt-5 pb-7">
              <div className="border-blue-300 border-2 rounded-xl px-4 text-blue-400">
                Strap-Long X
              </div>
              <div className="border-blue-300 border-2 rounded-xl  px-2">
                Colour X
              </div>
              <div className="border-blue-300 border-2 rounded-xl  px-2 ">
                Size X
              </div>
              <div className="border-blue-300 border-2 rounded-xl  px-2">
                Brand X
              </div>
              <div className="border-blue-300 border-2 rounded-xl  px-2">
                Marerial X
              </div>
              <div className="border-blue-300 border-2 rounded-xl  px-2">
                Baggit X
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-center">
                <label className="input input-bordered flex items-center gap-2 pb-3 pt-5 w-9/12">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Type Your message"
                  />
                </label>
                <div className="bg-blue-500 py-2 rounded-2xl px-3 ml-2">
                  <FaChevronRight className="text-4xl ml-3 text-center text-white" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <h1 className="text-center py-4 text-neutral-500">
                  Powered by
                </h1>
                <div className="flex items-center gap-1">
                  <span className="font-bold flex-1 ml-1"> Krunk.ai</span>
                  <div className="flex-1">
                    <img
                      className="w-4 text-neutral-500"
                      src="https://krunk.ai/static/media/krunk_Logo.0b9a990baf089d421846.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
