import { useEffect, useState } from "react";
import DishCard from "./DishCard";
import useDishApi from "../../hooks/apis/useDishApi";
import { useAuth0 } from "@auth0/auth0-react";

interface Dish {
    _id: string;
    image: string;
    name: string;
    description: string;
}

function Dishes() {
    const { isAuthenticated } = useAuth0();
    const [dishes, setDiseh] = useState<Dish[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { getAllDishes } = useDishApi();

    const fetchDishes = async () => {
        setLoading(true);
        try {
            const res = await getAllDishes();
            setDiseh(res.response as Dish[]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        isAuthenticated && fetchDishes();
    }, []);

    return (
        <section className="relative py-10 px-[12%] bg-[#F3F4F4] text-center">
            <img className="absolute left-[24%] top-6 w-[13%] opacity-45" src="img/bg-img2.png" alt="error" />
            <img className="absolute right-[27%] top-6 w-[10%] opacity-10 rotate-[-10deg]" src="img/bg-img3.png" alt="error" />
            <img className="absolute left-[26%] top-[43%] w-[6%] opacity-15" src="img/bg-img4.png" alt="error" />
            <img className="absolute left-[48%] top-[47%] w-[15%]" src="img/bg-img5.png" alt="error" />
            <img className="absolute right-[22%] top-[44%] w-[6%]" src="img/bg-img6.png" alt="error" />
            <img className="absolute right-[11%] top-[42%] w-[8%]" src="img/bg-img7.png" alt="error" />
            <img className="absolute right-[40%] top-[58%] w-[13%] opacity-45" src="img/bg-img2.png" alt="error" />
            <div className="font-bold text-5xl py-4">Our Special Dishes</div>
            <div className="text-[#5C6574]">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt</div>

            <div className="flex justify-between my-20 gap-4 flex-wrap">
                {loading ? <div className="font-bold text-xl">Loading...</div> :
                    dishes.length ? dishes.map((dish) => (
                        <DishCard key={dish._id} image={dish.image} name={dish.name} description={dish.description} />
                    )) : <div className="text-xl text-red-500 font-bold">Dishes not found!</div>}
            </div>

            <div className="flex flex-row flex-wrap justify-between items-center my-20">
                <img className="w-full lg:w-[45%]" src="img/dish.png" alt="error" />

                <div className="w-full lg:w-[50%] text-start py-14 px-20">
                    <div className="font-bold text-5xl mb-10">Wecome to Our <br /> Restaurant</div>
                    <div className="my-8 text-[#5C6574]">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</div>
                    <div className="flex flex-row gap-6">
                        <button type="button" className="p-2 w-[20%] text-sm text-center bg-[#101A24] text-white font-bold rounded-tl-lg rounded-br-lg">Menu</button>
                        <button type="button" className="p-2 w-[25%] text-sm text-center bg-[#EA6D27] text-white font-bold rounded-tl-lg rounded-br-lg">Book a table</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Dishes