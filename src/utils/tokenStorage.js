import Cookies from "js-cookie";

export const setAdminToken = (token) => {
    return Cookies.set('adminToken', token, { expires: 0.125 })
}
export const getAdminToken = () => {
    return Cookies.get('adminToken');
}
export const removeAdminToken = () => {
    return Cookies.remove('adminToken');
}
export const setUserToken = (token) => {
    return Cookies.set('userToken', token, { expires: 0.125 })
}
export const getUserToken = () => {
    return Cookies.get('userToken');
}
export const removeUserToken = () => {
    return Cookies.remove('userToken');
}