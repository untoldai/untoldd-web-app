import { getBaseDomain } from "../../handler/domainhandler";
import { getRequest, postRequest, putRequest } from "../../handler/request";
import { getHeaderConfig } from "../../utils/headerconfig";
import { getUserToken } from "../../utils/tokenStorage";
const token = getUserToken();

export const registerUserService = async (payload) => {
    try {
        const response = await postRequest({
            url: getBaseDomain() + "auth/register",
            data: payload,
            headers: null
        });
        return response;
    } catch (error) {
        return error;
    }
}

export const LoginserService = async (payload) => {
    try {
        const response = await postRequest({
            url: getBaseDomain() + "auth/login",
            data: payload,
            headers: null
        });
        return response;
    } catch (error) {
        return error;
    }
}

export const getUserProfileService = async () => {
    try {
        const response = await getRequest({
            url: getBaseDomain() + "auth/profile",
            headers: getHeaderConfig(token)
        });
        return response;
    } catch (error) {
        return error;
    }
}

// Service for address
export const addNewAddressService = async (data) => {
    try {
        const response = await postRequest({
            url: getBaseDomain() + "user/address/create",
            headers: getHeaderConfig(token),
            data: data
        });
        return response;
    } catch (error) {
        return error;
    }
}
export const updateAddressService = async (data,id) => {
    try {
        const response = await putRequest({
            url: getBaseDomain() + `user/address/update?id=${id}`,
            data: data,
            headers: getHeaderConfig(token)
        });
        return response;
    } catch (error) {
        return error;
    }
}

export const getAddressListsService = async () => {
    try {
        const response = await getRequest({
            url: getBaseDomain() + "user/address/lists",
            headers: getHeaderConfig(token)
        });
        return response;
    } catch (error) {
        return error;
    }
}
export const setDefaultAddressService = async (id) => {
    try {
        const response = await postRequest({
            url: getBaseDomain() + `user/address/set-default?id=${id}`,
            headers: getHeaderConfig(token),
            
        });
        return response;
    } catch (error) {
        return error;
    }
}