import { useHttpMethodContext } from "../../context/HttpMethodProvider";
import { ApiResponseData } from "../../types/api";

const useDishApi = () => {
    const { get } = useHttpMethodContext();

    const getAllDishes = async (): Promise<ApiResponseData> => {
        const response = await get('/api/dish/get');
        return response;
    };

    return { getAllDishes };
};

export default useDishApi;