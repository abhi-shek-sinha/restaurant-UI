import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* <div className=" grid grid-cols-5 grid-flow-row px-20">
        <div className="col-span-2 space-y-4 p-2">
          <img src="/images/main-logo.jpg" alt="footer logo" />
          <p className="text-[#5C6574]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore .Learn more
          </p>
          <div className="grid grid-cols-3 justify-around p-2 text-[#5C6574]">
            <div>
              Monday - Friday <br />
              8:00 am href 9:00 pm
            </div>
            <div>
              Saturday <br /> 8:00 am to 9:00 pm
            </div>
            <div>
              Saturday <br /> 8:00 am to 9:00 pm
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row text-[#5C6574] p-2 ">
          <h5 className="font-bold uppercase text-[#101A24]">Navigation</h5>
          <a href="#">Menu</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
          <a href="#">Main dishes</a>
        </div>
        <div>
          <div className="text-[#5C6574] flex flex-col gap-5 w-max  mb-3">
            <h5 className="font-bold uppercase text-black">Dishes</h5>
            <Link to="#">Fish & Viggies</Link>
            <Link to="#">Tofu Chilli</Link>
            <Link to="#">Egg & Cocumber</Link>
            <Link to="#">Lumpia w/Suace</Link>
          </div>
        </div>
        <div>
          <div className="text-[#5C6574] flex flex-col gap-5 w-max mb-3">
            <h5 className="font-bold uppercase text-black">Dishes</h5>
            <Link to="#">Fish & Viggies</Link>
            <Link to="#">Tofu Chilli</Link>
            <Link to="#">Egg & Cocumber</Link>
            <Link to="#">Lumpia w/Suace</Link>
          </div>
        </div>
      </div> */}
      <div className="md:p-[5%] p-[3%]">
        <div className="flex flex-row flex-wrap gap-4 justify-between ">
          <div className="w-full lg:w-[40%]">
            <img className="w-[180px]" src="images/main-logo.jpg" alt="error" />
            <p className="text-[#5C6574] text-justify my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore .Learn more
            </p>
            <h5 className="font-bold my-4">OPENING HOURS</h5>
            <div className="flex flex-row justify-between text-[#5C6574]">
              <div>
                Monday - Friday <br />
                8:00 am to 9:00 pm
              </div>
              <div>
                Saturday <br /> 8:00 am to 9:00 pm
              </div>
              <div>
                Saturday <br /> 8:00 am to 9:00 pm
              </div>
            </div>
          </div>
          <div className="text-[#5C6574] flex flex-col w-[24%] lg:w-[18%] mb-3">
            <h5 className="font-bold uppercase text-black">Navigation</h5>
            <Link to="#">Menu</Link>
            <Link to="#">About us</Link>
            <Link to="#">Contact us</Link>
            <Link to="#">Main dishes</Link>
          </div>
          <div className="text-[#5C6574] flex flex-col gap-5 w-[24%] lg:w-[18%] mb-3">
            <h5 className="font-bold uppercase text-black">Dishes</h5>
            <Link to="#">Fish & Viggies</Link>
            <Link to="#">Tofu Chilli</Link>
            <Link to="#">Egg & Cocumber</Link>
            <Link to="#">Lumpia w/Suace</Link>
          </div>
          <div className="text-[#5C6574] flex flex-col gap-5 w-[24%] lg:w-[15%] mb-3">
            <h5 className="font-bold uppercase text-black">Follow Us</h5>
            <div className="flex flex-row gap-3">
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
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <div className="flex justify-between gap-5 text-[#5C6574] mb-20">
          <div>@ 2022 Restaurants. All Right Reserved. Designed by Isaac</div>
          <div>Terms of Service Privacy Policy</div>
        </div>
      </div>
    </>
  );
}
