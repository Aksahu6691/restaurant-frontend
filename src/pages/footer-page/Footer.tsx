import { Link } from "react-router-dom";

function Footer() {
    return (
        <section className="relative pt-10 px-5 md:px-[12%] min-h-fit bg-[#fff]">

            {/* Subscription section */}
            <div className="absolute top-[-150px] bg-orange-300 bg-[url('img/footer-mask-group.png')] w-[95%] md:w-[80%] h-[350px] rounded-lg flex flex-col justify-evenly text-center">
                <h1 className="text-4xl text-[#FFF] font-bold">Get Or Promo Code by <br /> Subscribing To our Newsletter</h1>
                <div className="relative">
                    <input type="text" className="h-12 w-[45%] p-3 rounded-lg" placeholder="Enter your Email" />
                    <button type="button" className="absolute right-[28%] top-1 rounded bg-[#EA6D27] p-2 w-[10%]">Send</button>
                </div>
            </div>

            {/* Footer Content */}
            <div className="flex flex-row flex-wrap gap-4 justify-between pt-[250px]">
                <div className="w-full lg:w-[40%]">
                    <img className="w-[180px]" src="img/logo.png" alt="error" />
                    <p className="text-[#5C6574] text-justify my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .Learn more</p>
                    <h5 className="font-bold my-4">OPENING HOURS</h5>
                    <div className="flex flex-row justify-between text-[#5C6574]">
                        <div>
                            Monday - Friday <br />8:00 am to 9:00 pm
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
                            <img src="img/fb-icon.png" alt="error" width={20} height={20} />
                        </div>
                        <div className="border border-black rounded-[50%] p-1">
                            <img src="img/instagram-icon.png" alt="error" width={20} height={20} />
                        </div>
                        <div className="border border-black rounded-[50%] p-1">
                            <img src="img/twitter-icon.png" alt="error" width={20} height={20} />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-10" />
            <div className="flex justify-between gap-5 text-[#5C6574] mb-20">
                <div>@ 2022 Restaurants. All Right Reserved. Designed by Isaac</div>
                <div>Terms of Service Privacy Policy</div>
            </div>
        </section>
    )
}

export default Footer;