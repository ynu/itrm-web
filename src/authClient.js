import {AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR} from 'admin-on-rest';
import fetch from 'isomorphic-fetch';
import { apiHost } from './config';

export default async (type, params) => {
    if (type === AUTH_LOGIN) {
    }
    if (type === AUTH_LOGOUT) {
        console.info("AUTH_LOGOUT");
        window.location = apiHost + '/auth?redirect_uri='+encodeURIComponent(window.location.href);
    }
    if (type === AUTH_ERROR) {
        console.info("AUTH_ERROR");
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        console.log('AUTH_CHECK');
        try {
            const response = await fetch(apiHost + '/auth/user', {
                method: 'GET',
                credentials: 'include'
            });
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            const data = await response.json();
            console.info(data);
            return data.username != null ? Promise.resolve() : Promise.reject();
        }
        catch (e) {
            alert('系统错误：登录API调用失败，请与系统管理员联系');
            return Promise.resolve();
        }

    }
    return Promise.reject('Unkown method');
};
