import { getAdminToken } from "./tokenStorage"

export function getHeaderConfig(){
    return { Authorization:getAdminToken()}
}