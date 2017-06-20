import { simpleRestClient, fetchUtils } from 'admin-on-rest';
import {apiHost} from './config';

const httpClient = (url, options = {}) => {
    options.credentials = 'include';
    return fetchUtils.fetchJson(url, options);
}

export default simpleRestClient(apiHost, httpClient);