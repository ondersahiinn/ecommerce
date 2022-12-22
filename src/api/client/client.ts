import { http } from './http'
import { errorParser } from './errorParser';
import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export const getRequest = (url: string, headers: any) =>
    http
        .get(url, { cancelToken: source.token, headers })
        .then(res => res.data)
        .catch(err => errorParser(err));

export const postRequest = (url: string, data: any, headers: any) =>
    http
        .post(url, data, { cancelToken: source.token, headers })
        .then(res => res.data)
        .catch(err => errorParser(err));

export const putRequest = (url: string, data: any, headers: any) =>
    http
        .put(url, data, { cancelToken: source.token, headers })
        .then(res => res.data)
        .catch(err => errorParser(err));

export const deleteRequest = (url: any, headers: any) =>
    http
        .delete(url, { cancelToken: source.token, headers })
        .then(res => res.data)
        .catch(err => errorParser(err));
