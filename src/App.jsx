import imageavto from "./assets/images/avtoImage.jpg";
import Chat from "./components/Chat";

function App() {
  return (
    <div>
      <div className="bg-neutral-200 w-full h-auto py-20">
        <div className="w-5/12 h-auto border-l-teal-50  rounded-lg border-4 border-white mx-auto">
          <div className="flex justify-between">
            {/* header title  */}
            <div className="flex items-center justify-between gap-3 w-[300px] bg-neutral-200">
              <img
                className="rounded-full w-1 flex-1 py-3"
                src={imageavto}
                alt=""
              />
              <div className="badge badge-success badge-sm -ml-8 mt-16"></div>
              <div className="flex-1">
                <h1 className="text-2xl text-blue-500 -mt-4">Timpu</h1>
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
          <div className="flex justify-between bg-white">
            {/* header components  */}
            <div className="flex items-center justify-between gap-3 w-[300px]">
              <Chat/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
