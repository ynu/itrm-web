import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import chineseMessages from 'aor-language-chinese';
import { WebSite, Department } from './components';

const messages = {
  cn: chineseMessages,
}
const App = () => (
    <Admin restClient={jsonServerRestClient('http://localhost:4000')} locale="cn" messages={messages} title="云南大学IT资源管理系统">
      
      <Resource name="departments" options={{ label: '主管单位' }}
        list={Department.List} create={Department.Create} edit={Department.Edit}
      />
        <Resource name="websites" list={WebSite.List} create={WebSite.Create} edit={WebSite.Edit} remove={Delete} options={{ label: '网站及应用系统' }} />
        <Resource name="persons" />
    </Admin>
);

export default App;