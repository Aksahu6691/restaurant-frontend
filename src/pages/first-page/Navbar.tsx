function Navbar() {
    return (
        <nav className="flex flex-row justify-between align-middle">
            <img className="w-[16%]" src="img/logo.png" alt="error" />
            <div className="flex flex-row w-[30%] justify-between items-center">
                <div className="">Menu</div>
                <div className="">Event</div>
                <div className="">Gallery</div>
                <div className="">About</div>
                <div className="">Contact</div>
            </div>
            <button type="button" className="p-3 w-[12%] text-center bg-[#EA6D27] text-white font-bold rounded-tl-xl rounded-br-xl">Book a table</button>
        </nav>
    )
}

export default Navbar