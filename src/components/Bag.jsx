import { VscVerifiedFilled } from "react-icons/vsc";
import images from "../assets/images/images.jpg";
import { FiChevronRight } from "react-icons/fi";

const Bag = () => {
  return (
    <div className="pt-10">
      <div className="w-[340px]">
        <div className="alert bg-neutral-200 ml-4 flex flex-col">
          <div className="w-[220px] bg-white h-10">
            <div className="flex items-center justify-between -ml-10 gap-1 w-[300px] h-24 bg-white rounded-lg">
              <div className="w-[90px]">
                <img
                  className="rounded-2xl w-[200px] -py-10 flex-1 ml-3"
                  src={images}
                  alt=""
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-center gap-5 ">
                  <h1 className="font-semibold ">Bags on Timpu</h1>
                  <VscVerifiedFilled className="text-orange-400 text-xl" />
                </div>
                <div className="flex items-center justify-center gap-5 mt-3">
                  <h1 className="font-semibold text-neutral-500">1123 products</h1>
                  <FiChevronRight className="text-2xl text-neutral-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[220px] pt-14 mr-20">
            Or set filter and help us choose the best bag for you.
          </div>
        </div>
      </div>
      <div className="ml-7 mt-1">4:45 PM</div>
    </div>
  );
};

export default Bag;
