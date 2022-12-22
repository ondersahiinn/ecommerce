import { getRequest } from '../client/client';
import finalConfig from '../../../contants/config.json';
import headers from '../../../contants/header.json';

const servicesBaseUrl = process.env.NODE_ENV === "production" ? "https://ecommerce-onderecommerce.vercel.app/" : "http://localhost:3000/"

export const getPostDateService = async () => {
    const url = servicesBaseUrl+finalConfig.POSTDATA;
    const config = headers.content_type.application_json;
    const result = await getRequest(url, config);
    return result;
};
