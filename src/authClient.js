import {AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR} from 'admin-on-rest';
import fetch from 'isomorphic-fetch';

export default async (type, params) => {
    if (type === AUTH_LOGIN) {
        console.info("AUTH_LOGIN");
        window.location = "http://api-for-client.itrm.ynu.edu.cn:4000/auth?redirect_uri=http://itrs-web.itrm.ynu.edu.cn:3000/";
        //return Promise.resolve();
    }
    if (type === AUTH_LOGOUT) {
        console.info("AUTH_LOGOUT");
        window.location = "http://api-for-client.itrm.ynu.edu.cn:4000/auth?redirect_uri=http://itrs-web.itrm.ynu.edu.cn:3000/";
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        console.info("AUTH_ERROR");
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        try {
            const response = await fetch('http://api-for-client.itrm.ynu.edu.cn:4000/auth/user', {
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
            console.error(e);
        }

    }
    return Promise.reject('Unkown method');
};
