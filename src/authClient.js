import {AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR} from 'admin-on-rest';
import fetch from 'isomorphic-fetch';
import { apiHost } from './config';

export default async (type, params) => {
    if (type === AUTH_LOGIN) {
    }
    if (type === AUTH_LOGOUT) {
        const randomHash = Math.round(Math.random() * 1000);
        const authUrl = `${apiHost}/auth?redirect_uri=${encodeURIComponent(window.location.href)}&hash=${randomHash}`;
        window.location.href = authUrl;
        return false;
    }
    if (type === AUTH_ERROR) {
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        try {
            const randomHash = Math.round(Math.random() * 1000);
            const response = await fetch(`${apiHost}/auth/user?hash=${randomHash}`, {
                method: 'GET',
                credentials: 'include'
            });
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            const data = await response.json();
            return data.username != null ? Promise.resolve() : Promise.reject();
        }
        catch (e) {
            alert('系统错误：登录API调用失败，请与系统管理员联系');
            return Promise.resolve();
        }

    }
    return Promise.reject('Unkown method');
};
