import { useState } from "react";
import RegistrationModal from "../user/RegistrationModal";
import BgImg from "./BgImg";
import BgRings from "./BgRings";
import Navbar from "./Navbar";
import LoginModal from "../user/LoginModal";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function Home() {
    const { user, isAuthenticated } = useAuth0();
    const reduxUser = useSelector((state: RootState) => state.user);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<'register' | 'login'>('register');

    const handleOpenModal = (type: 'register' | 'login') => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <section className="relative py-8 px-5 md:px-[12%] min-h-screen bg-[#fff]">

            {/* Navigation Bar */}
            <Navbar onOpen={handleOpenModal} />

            {isModalOpen && modalType === 'register' && <RegistrationModal onClose={handleCloseModal} />}
            {isModalOpen && modalType === 'login' && <LoginModal onClose={handleCloseModal} />}

            {/* {userName && <div className="absolute left-[40%] top-[20%] font-bold text-3xl">Welcome Cookiey: {userName}</div>}
            {isAuthenticated && <div className="absolute left-[40%] top-[14%] font-bold text-3xl">Welcome Auth0: {user?.name}</div>} */}
            {(isAuthenticated || reduxUser.name) && <div className="absolute left-[40%] top-[16%] font-bold text-3xl">Welcome: {user?.name || reduxUser.name}</div>}
            {/* Background designs */}
            <BgRings />

            {/* Dashboard Content */}
            <div className="relative flex flex-row flex-wrap my-[5%] py-14">

                {/* background images */}
                <BgImg />

                {/* Left Section content */}
                <div className="w-full lg:w-[50%] text-wrap py-14 px-20 ">
                    <div className="font-bold text-5xl mb-10">We provide the<br />best food for you</div>
                    <div className="my-8 text-[#5C6574]">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</div>
                    <div className="flex flex-row gap-6">
                        <button type="button" className="p-2 w-[20%] text-sm text-center bg-[#101A24] text-white font-bold rounded-tl-lg rounded-br-lg">Menu</button>
                        <button type="button" className="p-2 w-[25%] text-sm text-center bg-[#EA6D27] text-white font-bold rounded-tl-lg rounded-br-lg">Book a table</button>
                    </div>
                    <div className="flex flex-row gap-3 mt-10">
                        <div className="border border-black rounded-[50%] p-1">
                            <img src="img/fb-icon.png" alt="error" width={20} height={20} />
                        </div>
                        <div className="border border-black rounded-[50%] p-1">
                            <img src="img/instagram-icon.png" alt="error" width={20} height={20} />
                        </div>
                        <div className="border border-black rounded-[50%] p-1">
                            <img src="img/twitter-icon.png" alt="error" width={20} height={20} />
                        </div>
                        <div className="border border-[#101A2433] w-[143px] h-0 self-center"></div>
                    </div>
                </div>

                {/* right section contend */}
                <div className="w-full lg:w-[50%] flex justify-center z-10">
                    <img className="w-[55%] h-[100%]" src="img/restro.png" alt="error" />
                </div>
            </div>
        </section>
    )
}

export default Home