import React, { createContext, useCallback, useContext, useState } from 'react';
import { ApiResponseData } from '../types/api';
import AxiosService from './AxiosService';

interface HttpMethodContextType {
    showApiLoader: boolean;
    setShowApiLoader: React.Dispatch<React.SetStateAction<boolean>>;
    get: (endpoint: string, showLoader?: boolean) => Promise<ApiResponseData>;
    post: (
        endpoint: string,
        data: object | Array<object>,
        showLoader?: boolean,
        header?: object
    ) => Promise<ApiResponseData>;
    put: (
        endpoint: string,
        data: object | Array<object>,
        showLoader?: boolean
    ) => Promise<ApiResponseData>;
    deleteMe: (
        endpoint: string,
        body: Array<object> | object,
        showLoader?: boolean
    ) => Promise<ApiResponseData>;
}

export const HttpMethodContext = createContext<
    HttpMethodContextType | undefined
>(undefined);

const createApiErrorResponse = (error: unknown): ApiResponseData => {
    let errorMsg = 'Something went wrong';

    if (error instanceof String) {
        errorMsg = error.toString();
    } else if (error instanceof Error) {
        errorMsg = error.message;
    }

    return { success: false, errorMsg, response: {} };
};

export const HttpMethodContextProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const [showApiLoader, setShowApiLoader] = useState(false);

    AxiosService.defaults.headers.common.Accept = 'application/json';
    AxiosService.defaults.headers.common['Content-Type'] = 'application/json';
    // AxiosService.defaults.headers.common['Authorization'] = `Bearer ${token}`,

    const get = useCallback(
        async (endpoint: string, showLoader = true): Promise<ApiResponseData> => {
            setShowApiLoader(showLoader);

            return AxiosService.get(endpoint)
                .then((res) => {
                    console.log(`GET: ${endpoint}:`, res.status);
                    return {
                        success: true,
                        errorMsg: '',
                        response: res.data
                    };
                })
                .catch((err) => {
                    console.log(`🛑 GET: ${endpoint}:`, err?.response?.data ?? err);
                    return createApiErrorResponse(err);
                })
                .finally(() => setShowApiLoader(false));
        },
        [setShowApiLoader]
    );

    const post = useCallback(
        async (
            endpoint: string,
            data: object | Array<object>,
            showLoader = true,
            headers = {}
        ): Promise<ApiResponseData> => {
            setShowApiLoader(showLoader);

            return AxiosService.post(endpoint, data, headers)
                .then((res) => {
                    console.log(`POST: ${endpoint} res`, res.status);
                    return {
                        success: true,
                        errorMsg: '',
                        response: res.data
                    };
                })
                .catch((err) => {
                    console.log(`🛑 POST - ${endpoint} err`, err?.response?.data ?? err);
                    return createApiErrorResponse(err);
                })
                .finally(() => setShowApiLoader(false));
        },
        [setShowApiLoader]
    );

    const put = useCallback(
        async (
            endpoint: string,
            data: object | Array<object>,
            showLoader = true
        ): Promise<ApiResponseData> => {
            setShowApiLoader(showLoader);

            return AxiosService.put(endpoint, data)
                .then((res) => {
                    console.log(`PUT: ${endpoint} res`, res.status);
                    return {
                        success: true,
                        errorMsg: '',
                        response: res.data
                    };
                })
                .catch((err) => {
                    console.log(`🛑 PUT - ${endpoint} err`, err?.response?.data ?? err);
                    return createApiErrorResponse(err);
                })
                .finally(() => setShowApiLoader(false));
        },
        [setShowApiLoader]
    );

    const deleteMe = useCallback(
        async (
            endpoint: string,
            body: Array<object> | object,
            showLoader = true
        ): Promise<ApiResponseData> => {
            setShowApiLoader(showLoader);

            return AxiosService.delete(endpoint, { data: body })
                .then((res) => {
                    console.log(`DELETE: ${endpoint} res`, res.status);
                    return {
                        success: true,
                        errorMsg: '',
                        response: res.data
                    };
                })
                .catch((err) => {
                    console.log(
                        `🛑 DELETE - ${endpoint} err`,
                        err?.response?.data ?? err
                    );
                    return createApiErrorResponse(err);
                })
                .finally(() => setShowApiLoader(false));
        },
        [setShowApiLoader]
    );

    return (
        <HttpMethodContext.Provider
            value={{ showApiLoader, setShowApiLoader, get, post, put, deleteMe }}
        >
            {children}
        </HttpMethodContext.Provider>
    );
};

export const useHttpMethodContext = () => {
    const context = useContext(HttpMethodContext);

    if (!context) {
        throw new Error('useHttpMethodContext must be used within a UserProvider');
    }

    return context;
};