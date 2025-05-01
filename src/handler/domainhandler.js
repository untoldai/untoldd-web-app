const local = "http://localhost:8001/v1/api/";
const production = "https://untoldd-web-backend.vercel.app/v1/api/"; // Example production URL

export function getBaseDomain() {
    let baseDomain;
    switch ('dev') {
        case 'dev':
            baseDomain = local;
            break;
        case 'local':
            baseDomain = local;
            break;
        case 'prod':
            baseDomain = production;
            break;
        default:
            throw new Error("Invalid environment specified");
    }

    return baseDomain;
}
