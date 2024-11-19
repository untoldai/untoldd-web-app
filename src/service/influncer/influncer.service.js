import { getBaseDomain } from "../../handler/domainhandler";
import { getRequest, postRequest, putRequest } from "../../handler/request";
import { getHeaderConfig } from "../../utils/headerconfig";
import { getInfluncerToken, getUserToken } from "../../utils/tokenStorage";


export const registerInfluncerService = async (payload) => {
    try {
        const response = await postRequest({
            url: getBaseDomain() + "auth/influncer/register",
            data: payload,
            headers: null
        });
        console.log(response)
        return response;
    } catch (error) {
        return error;
    }
}

export const LoginInfluncerService = async (payload) => {
    try {
        const response = await postRequest({
            url: getBaseDomain() + "auth/influncer/login",
            data: payload,
            headers: null
        });
        return response;
    } catch (error) {
        return error;
    }
}

export const getInfluncerProfileService = async () => {
    try {
console.log(getInfluncerToken())
        const response = await getRequest({
            url: getBaseDomain() + "auth/influncer/profile",
            headers: getHeaderConfig(getInfluncerToken())
        });
        return response;
    } catch (error) {
        return error;
    }
}
export const getInfluncerProfileDetailsService = async () => {
    try {

        const response = await getRequest({
            url: getBaseDomain() + "auth/influncer/profile/details",
            headers: getHeaderConfig(getInfluncerToken())
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
            headers: getHeaderConfig(getUserToken()),
            data: data
        });
        return response;
    } catch (error) {
        return error;
    }
}
export const updateAddressService = async (data, id) => {
    try {
        const response = await putRequest({
            url: getBaseDomain() + `user/address/update?id=${id}`,
            data: data,
            headers: getHeaderConfig(getUserToken())
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
            headers: getHeaderConfig(getUserToken())
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
            headers: getHeaderConfig(getUserToken())

        });
        return response;
    } catch (error) {
        return error;
    }
}

// service for order 

export const createOrderService = async (payload) => {
    try {
        const response = await postRequest({
            url: getBaseDomain() + "order/create",
            headers: getHeaderConfig(getUserToken()),
            data: payload
        });
        return response;
    } catch (error) {
        return error;
    }
}

export const confirmOrderService = async (payload, orderId) => {
    try {
        const response = await postRequest({
            url: getBaseDomain() + `order/update?orderId=${orderId}`,
            headers: getHeaderConfig(getUserToken()),
            data: payload
        });
        return response;
    } catch (error) {
        return error;
    }
}

// service for get orderLists
export const getOrderListService = async () => {
    try {
        const response = await getRequest({
            url: getBaseDomain() + `order/users/orders`,
            headers: getHeaderConfig(getUserToken()),

        });
        return response;
    } catch (error) {
        return error;
    }
}
// get order details service 
export const getOrderDetailsService = async (orderId) => {
    try {
        const response = await getRequest({
            url: getBaseDomain() + `order/users/order-details?orderId=${orderId}`,
            headers: getHeaderConfig(getUserToken()),

        });
        return response;
    } catch (error) {
        return error;
    }
}
// payment 
export const intiatePaymentService = async (payload) => {
    try {
        const response = await postRequest({
            url: getBaseDomain() + "payment/initate",
            headers: getHeaderConfig(getUserToken()),
            data: payload
        });
        return response;
    } catch (error) {
        return error;
    }
}

export const verifyPaymentPaymentService = async (payload) => {
    try {
        const response = await postRequest({
            url: getBaseDomain() + "payment/verify",
            headers: getHeaderConfig(getUserToken()),
            data: payload
        });
        return response;
    } catch (error) {
        return error;
    }
}