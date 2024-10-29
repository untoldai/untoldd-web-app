import { getBaseDomain } from "../../handler/domainhandler";
import { getRequest } from "../../handler/request";


export const getProductByCategory = async (category) => {
    try {
        const resp = await getRequest({
            url: getBaseDomain() + `product/all-product?category=${category}`,
            headers: null
        });
        return resp;
    } catch (error) {
        return error;
    }
}

export const getProductDescriptionService = async (proudctId) => {
    try {
        const response = await getRequest({
            url: getBaseDomain() + `product/details?productId=${proudctId}`,
            headers: null
        });
        return response;

    } catch (error) {
        return error;
    }
}