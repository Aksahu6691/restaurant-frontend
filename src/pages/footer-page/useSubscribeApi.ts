import { useHttpMethodContext } from "../../context/HttpMethodProvider";
import { ApiResponseData } from "../../types/api";

const useSubscribeApi = () => {
    const { post } = useHttpMethodContext();

    const subscribeUser = async (userData: object): Promise<ApiResponseData> => {
        const response = await post('/api/subscribe/', userData);
        return response;
    }

    return { subscribeUser };
};

export default useSubscribeApi;