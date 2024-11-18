import { useHttpMethodContext } from "../../context/HttpMethodProvider";
import { ApiResponseData } from "../../types/api";

const useUserApi = () => {
    const { post } = useHttpMethodContext();

    const addUserDetail = async (userData: object): Promise<ApiResponseData> => {
        const response = await post('/api/user/add', userData);
        return response;
    }

    const loginUser = async (userData: object): Promise<ApiResponseData> => {
        const response = await post('/api/user/login', userData);
        return response;
    }

    return { addUserDetail, loginUser };
};

export default useUserApi;