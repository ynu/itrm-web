import { simpleRestClient } from 'admin-on-rest';
import {apiHost} from './config';

export default simpleRestClient(apiHost);