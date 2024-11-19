import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";
import { useEffect, useState } from "react";
import useTestimonialApi from "../../hooks/apis/useTestimonialApi";

function Testimonial() {
    interface MyTestimonial {
        _id: string;
        name: string;
        image: string;
        description: string;
        designation: string;
    }

    const [testimonialList, setTestimonialList] = useState<MyTestimonial[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { getAllTestimonials } = useTestimonialApi();

    const getTestimonialList = async () => {
        try {
            setLoading(true);
            const res = await getAllTestimonials();
            setTestimonialList(res.response as MyTestimonial[]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getTestimonialList();
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <section className="py-10 px-5 md:px-[12%] pb-[250px] bg-[#F3F4F4] text-center">
            <h1 className="font-bold text-4xl my-5">Our Happy Customers</h1>
            <p className="text-[#5C6574] my-5">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt</p>
            <div className="">
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    keyBoardControl={true}
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {loading ? <div className="font-bold text-xl">Loading...</div> :
                        testimonialList.length ? testimonialList.map((item) => (
                            <TestimonialCard
                                key={item._id}
                                image={item.image}
                                name={item.name}
                                description={item.description}
                                designation={item.designation}
                            />
                        )) : <div className="text-xl text-red-500 font-bold">Testimonial not found!</div>}
                </Carousel>
            </div>
        </section>
    )
}

export default Testimonial