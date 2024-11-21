import BookButton from "../../../component/common component/BookButton";
import MenuButton from "../../../component/common component/MenuButton";

function HeroSection() {
  return (
    <>
      <section className="relative py-8 px-5 md:px-[12%] min-h-screen bg-[#fff]">
        <div className="relative flex flex-row flex-wrap my-[5%] py-14">
          <div className="w-full lg:w-[50%] text-wrap py-14 px-20 ">
            <div className="font-bold text-5xl mb-10">
              We provide the
              <br />
              best food for you
            </div>
            <div className="my-8 text-[#5C6574]">
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit, sed do eiusmod tempor incididunt <br /> ut
              labore et dolore magna aliqua.
            </div>
            <div className="flex flex-row gap-6">
              <MenuButton />
              <BookButton />
            </div>
            <div className="flex flex-row gap-3 mt-10">
              <div className="border border-black rounded-[50%] p-1">
                <img
                  src="images/fb-icon.png"
                  alt="error"
                  width={20}
                  height={20}
                />
              </div>
              <div className="border border-black rounded-[50%] p-1">
                <img
                  src="images/instagram-icon.png"
                  alt="error"
                  width={20}
                  height={20}
                />
              </div>
              <div className="border border-black rounded-[50%] p-1">
                <img
                  src="images/twitter-icon.png"
                  alt="error"
                  width={20}
                  height={20}
                />
              </div>
              <div className="border border-[#101A2433] w-[143px] h-0 self-center"></div>
            </div>
          </div>

          {/* right section contend */}
          <div className="w-full lg:w-[50%] flex justify-center z-10">
            <img
              className="w-[55%] h-[100%]"
              src="images/restro.png"
              alt="error"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
