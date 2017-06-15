import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';

import WebSite from './components/website';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://localhost:4000')}>
        <Resource name="websites" list={WebSite.List} create={WebSite.Create} edit={WebSite.Edit} remove={Delete} />
    </Admin>
);

export default App;