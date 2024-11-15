function Chef() {
    return (
        <section className="relative py-10 px-5 md:px-[12%] min-h-screen bg-[#fff]">
            <img className="absolute left-[-5%] top-[18%] w-[10%]" src="img/bg-img6.png" alt="error" />
            <img className="absolute left-[8%] top-[10%] w-[12%]" src="img/bg-img7.png" alt="error" />
            <div className="py-10 flex flex-row flex-wrap justify-between">
                <div className="w-full lg:w-[50%] flex flex-col gap-6 justify-center mb-5">
                    <h1 className="font-bold text-4xl text-[#101A24]">Our Experts Chef</h1>

                    <p className="text-[#5C6574]">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</p>

                    <div className="grid grid-flow-col grid-cols-2">
                        <div className="">
                            <div className="mb-7 flex items-center text-left text-[#5C6574] gap-3 leading-5">
                                <img className="w-5 h-5" src="img/check.png" alt="error" />
                                <div>Lorem ipsum dolor sit amet, consectetur</div>
                            </div>
                            <div className="mb-7 flex items-center text-left text-[#5C6574] gap-3 leading-5">
                                <img className="w-5 h-5" src="img/check.png" alt="error" />
                                <div>Lorem ipsum dolor sit amet, consectetur</div>
                            </div>
                            <div className="mb-7 flex items-center text-left text-[#5C6574] gap-3 leading-5">
                                <img className="w-5 h-5" src="img/check.png" alt="error" />
                                <div>Lorem ipsum dolor sit amet, consectetur</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-7 flex items-center text-left text-[#5C6574] gap-3 leading-5">
                                <img className="w-5 h-5" src="img/check.png" alt="error" />
                                <div>Lorem ipsum dolor sit amet, consectetur</div>
                            </div>
                            <div className="mb-7 flex items-center text-left text-[#5C6574] gap-3 leading-5">
                                <img className="w-5 h-5" src="img/check.png" alt="error" />
                                <div>Lorem ipsum dolor sit amet, consectetur</div>
                            </div>
                            <div className="mb-7 flex items-center text-left text-[#5C6574] gap-3 leading-5">
                                <img className="w-5 h-5" src="img/check.png" alt="error" />
                                <div>Lorem ipsum dolor sit amet, consectetur</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row gap-6">
                        <button type="button" className="p-2 w-[20%] text-sm text-center bg-[#101A24] text-white font-bold rounded-tl-lg rounded-br-lg">Menu</button>
                        <button type="button" className="p-2 w-[25%] text-sm text-center bg-[#EA6D27] text-white font-bold rounded-tl-lg rounded-br-lg">Book a table</button>
                    </div>
                </div>
                <img className="w-full lg:w-[40%]" src="img/kitchen-chef.png" alt="error" />
            </div>
        </section>
    )
}

export default Chef