import staticData from "../../config/staticData";

interface Dish {
    image: string;
    name: string;
    description: string;
}

function DishCard({ image, name, description }: Dish) {
    return (
        <div className="relative w-[250px] mb-4">
            {/* <img className="absolute left-9 top-[0px]" src="img/dish1.png" alt="error" width={180} /> */}
            <img className="absolute left-9 top-[0px]" src={`${staticData.apiUrl}/${image}`} alt="error" width={180} />
            <div className="absolute right-5 top-14 bg-[#101A24] text-[#FFF] p-2 rounded-[50%]">$12</div>
            <div className="mt-24 p-2 rounded rounded-tl-[14%] rounded-br-[14%] border-2 border-[#FFFFFF] hover:bg-[#FFFFFF]">
                <div className="font-bold mt-28">{name}</div>
                <div className="my-6 text-[#5C6574]">{description}</div>
            </div>
        </div>
    )
}

export default DishCard