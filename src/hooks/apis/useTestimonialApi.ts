import { useHttpMethodContext } from "../../context/HttpMethodProvider";
import { ApiResponseData } from "../../types/api";

const useTestimonialApi = () => {
    const { get } = useHttpMethodContext();

    const getAllTestimonials = async (): Promise<ApiResponseData> => {
        const response = await get('/api/testimonial/get');
        return response;
    };

    return { getAllTestimonials };
};

export default useTestimonialApi;