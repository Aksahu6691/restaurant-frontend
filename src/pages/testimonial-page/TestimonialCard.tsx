import staticData from "../../config/staticData";

interface MyTestimonial {
    name: string;
    image: string;
    description: string;
    designation: string;
}

function TestimonialCard({ name, image, description, designation }: MyTestimonial) {

    return (
        <div className="relative my-28">
            <img className="absolute top-[-13%] right-[45%] w-[100px] h-[100px] rounded-[50%] object-cover" src={`${staticData.apiUrl}/${image}`} alt="error" />
            <div className="w-full md:w-[70%] lg:w-[50%] mx-auto rounded-2xl rounded-tl-[20%] rounded-br-[20%] bg-[#FFFFFF] p-12 lg:py-24 lg:px-28">
                <p className="text-[#5C6574]">{description}</p>

                <h4 className="font-bold mt-6">{name}</h4>
                <div className="text-[#5C6574]">{designation}</div>
            </div>
        </div>
    )
}

export default TestimonialCard