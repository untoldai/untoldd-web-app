import { getBaseDomain } from "../../handler/domainhandler";
import { getRequest, postRequest, putRequest } from "../../handler/request";
import { getHeaderConfig } from "../../utils/headerconfig";
import { getAdminToken } from "../../utils/tokenStorage";

export const adminLoginService = async (payload) => {
    try {
        const response = await postRequest({
            url: getBaseDomain() + 'auth/admin/login',
            data: payload,
            headers: null

        });
        return response;
    } catch (error) {
        return error;
    }
}

export const getAdminProfileService = async () => {
    try {
        const response = await getRequest({
            url: getBaseDomain() + "auth/admin/profile",
            headers: getHeaderConfig(getAdminToken())
        });
        return response;
    } catch (error) {
        return error;
    }
}
export const getAdminProfileDetailsService = async () => {
    try {
        const response = await getRequest({
            url: getBaseDomain() + "auth/admin/profile-details",
            headers: getHeaderConfig(getAdminToken())
        });
        return response;
    } catch (error) {
        return error;
    }
}
//add product 

export const addProductService = async (payload) => {
    try {
        const response = await postRequest({
            url: getBaseDomain() + 'product/admin/add-product',
            data: payload,
            headers: getHeaderConfig(getAdminToken())

        });
        return response;
    } catch (error) {
        return error;
    }
}
export const getAllProductService = async ({ page, limit = 20 }) => {
    try {
        const response = await getRequest({
            url: getBaseDomain() + "product/admin/all-product",
            headers: getHeaderConfig(getAdminToken())
        });
        return response;
    } catch (error) {
        return error;
    }
}
export const updateActiveToggleStatusService = async ({ payload }) => {
    try {
        const response = await putRequest({
            url: getBaseDomain() + "product/admin/toggle-active",
            data: payload,
            headers: getHeaderConfig(getAdminToken())
        });
        return response;
    } catch (error) {
        return error;
    }
}
export const updateFeaturesToggleStatusService = async ({ payload }) => {
    try {
        const response = await putRequest({
            url: getBaseDomain() + "product/admin/toggle-features",
            data: payload,
            headers: getHeaderConfig(getAdminToken())
        });
        return response;
    } catch (error) {
        return error;
    }
}

export const getAllUserListsService = async (page, limit) => {
    try {
        const response = await getRequest({
            url: getBaseDomain() + `auth/admin/user-lists?limit=${limit}&page=${page}`,
            headers: getHeaderConfig(getAdminToken())
        });
        return response;
    } catch (error) {
        return error;
    }
}

// service for get orderLists
export const getOrderListServiceAdmin = async () => {
    try {
        const response = await getRequest({
            url: getBaseDomain() + `order/admin/orders`,
            headers: getHeaderConfig(getAdminToken()),

        });
        return response;
    } catch (error) {
        return error;
    }
}