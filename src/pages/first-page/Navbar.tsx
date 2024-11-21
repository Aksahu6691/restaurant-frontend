import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { resetRedux, updateStaffName } from "../../redux/userSlice";

interface NavbarProps {
    onOpen: (type: 'register' | 'login') => void;
}

function Navbar({ onOpen }: NavbarProps) {
    const token = Cookies.get('authToken');
    const dispatch = useDispatch<AppDispatch>();
    const reduxUser = useSelector((state: RootState) => state.user);
    const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently, user } = useAuth0();

    console.log(reduxUser.name);

    useEffect(() => {
        isAuthenticated && !token && getAccessTokenSilently().then((token) => {

            // Set cookies
            Cookies.set('authToken', token, { expires: 1 });
            Cookies.set('userName', user?.name!);

            // Set redux
            dispatch(updateStaffName(user?.name!));

            // after that reload entire page
            window.location.reload();
        }).catch((err) => { console.log("error running"); console.log(err); });
    }, [isAuthenticated]);

    // It is manually login and logout code
    const removeCookiey = () => {
        Cookies.remove('authToken');
        Cookies.remove('userName');
        dispatch(resetRedux());
        logout({ logoutParams: { returnTo: window.location.origin } });
    }

    return (
        <nav className="flex flex-row flex-wrap gap-4 justify-between align-middle">
            <img className="w-full md:w-[16%]" src="img/logo.png" alt="error" />
            <div className="flex flex-row w-full md:w-[50%] lg:w-[40%] justify-between items-center">
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">Menu</Link>
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">Gallery</Link>
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">About</Link>
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">Contact</Link>

                {/* Use Auth0 for login and logout */}
                {token || isAuthenticated ? (
                    <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300" onClick={() => removeCookiey()}>Logout</Link>
                ) : (
                    <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300" onClick={() => loginWithRedirect()}>Login</Link>
                )}

                {/* It is manual login and logout code */}
                {/* {token ?
                    <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300" onClick={logout}>Logout</Link> :
                    <>
                        <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300" onClick={() => onOpen('register')}>Register</Link>
                        <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300" onClick={() => onOpen('login')}>Login</Link>
                    </>
                } */}
            </div>
            <button type="button" className="p-3 w-full hidden md:block md:w-[12%] text-center bg-[#EA6D27] text-white font-bold rounded-tl-xl rounded-br-xl">Book a table</button>
        </nav>
    )
}

export default Navbar