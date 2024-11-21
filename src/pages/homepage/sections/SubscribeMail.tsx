function SubscribeMail() {
  return (
    <>
      <div className=" md:p-[5%] p-[3%]  ">
        <div className=" bg-bg-sub-mail bg-cover rounded-2xl md:p-[8%] p-[4%] ">
          <div className="space-y-5">
            <div className="text-white text-4xl text-center font-medium ">
              <p>Get Or Promo Code by </p>
              <p>Subscribing To our Newsletter</p>
            </div>
            <div className="flex justify-center">
              <span className="p-2  bg-white rounded-2xl">
                <input
                  type="text"
                  className="h-12  p-2 rounded-lg"
                  placeholder="Enter your Email"
                />
                <button
                  type="button"
                  className=" rounded bg-[#EA6D27] p-2 px-5  w-max"
                >
                  Send
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubscribeMail;
