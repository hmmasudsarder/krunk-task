function App() {
  return (
    <div>
      <div className="bg-neutral-200 w-full h-auto py-20">
        <div className="w-3/12 h-auto mx-auto border-l-teal-50 bg-white rounded-lg">
          <div className="">
            <div className="flex items-center justify-between gap-2 w-[300px]">
              <div className="indicator ">
                <span className="indicator-item indicator-bottom badge badge-secondary"></span>
                <div className="grid w-32 h-32 bg-base-300 place-items-center">
                  content
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl">Timpu</h1>
                <p className="font-bold w-full">Chat assistant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
