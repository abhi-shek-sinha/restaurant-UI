export default function Header() {
  return (
    <>
      <div className="bg-transparent flex flex-wrap justify-between px-[2%] md:px-[7%] ">
        <div className="p-3">
          <img src="/images/main-logo.jpg" />
        </div>
        <div className="flex flex-wrap justify-center items-center grow space-x-10 p-3 text-[#101A24] ">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <p className="">Menu</p>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <p>Event</p>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <p>Gallery</p>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <p>About</p>
          </a>
        </div>
        <div className="flex justify-around flex-wrap items-center space-x-5 p-3 ">
          <button className="p-2 w-max text-sm text-center bg-[#101A24] text-white font-bold rounded-tl-lg rounded-br-lg">
            LogIn
          </button>
          <button className="p-2 w-max text-sm text-center bg-[#101A24] text-white font-bold rounded-tl-lg rounded-br-lg">
            SignUp
          </button>
          <button className="p-2 w-max text-sm text-center bg-[#EA6D27] text-white font-bold rounded-tl-lg rounded-br-lg">
            Book a table
          </button>
        </div>
      </div>
    </>
  );
}
