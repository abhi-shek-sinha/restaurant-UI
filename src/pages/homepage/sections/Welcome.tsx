import BookButton from "../../../component/common component/BookButton";
import MenuButton from "../../../component/common component/MenuButton";

const Welcome = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-between items-center my-20 bg-[#F3F4F4] md:p-[5%] p-[3%] ">
        <img className="w-full lg:w-[50%]" src="images/dish.png" alt="error" />

        <div className="w-full lg:w-[50%] text-start py-14 px-2 lg:px-20">
          <div className="font-bold text-5xl mb-10">
            Wecome to Our <br /> Restaurant
          </div>
          <div className="my-8 text-[#5C6574]">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor incididunt <br /> ut labore et dolore magna
            aliqua.
          </div>
          <div className="flex flex-row gap-6">
            <MenuButton />
            <BookButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
