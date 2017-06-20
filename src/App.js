import React from 'react';
import { jsonServerRestClient, simpleRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import chineseMessages from 'aor-language-chinese';
import { WebSite, Department, Wechat, Weibo, Email, Dashboard } from './components';
import authClient from './authClient';
// import Login from './Login';
import Layout from './Layout';
import restClient from './restClient';

const messages = {
  cn: chineseMessages,
}
const App = () => (
    <Admin
      restClient={restClient}
      locale="cn"
      messages={messages}
      authClient={authClient}
      title="云南大学IT资源管理系统"
      dashboard={Dashboard}
    >

      
      <Resource name="departments" options={{ label: '主管单位' }}
        list={Department.List} create={Department.Create} edit={Department.Edit} remove={Delete}
      />
        <Resource name="websites" options={{ label: '网站及应用系统' }}
          list={WebSite.List} create={WebSite.Create} edit={WebSite.Edit} remove={Delete} show={WebSite.Show}
        />
        <Resource name="persons" />
        <Resource name="wechatOfficialAccounts" options={{ label: '微信公众号' }}
          list={Wechat.List} create={Wechat.Create} edit={Wechat.Edit} remove={Delete}
        />
        <Resource name="weiboAccounts" options={{ label: '微博账号' }}
          list={Weibo.List} create={Weibo.Create} edit={Weibo.Edit} remove={Delete}
        />
        <Resource name="emails" options={{ label: '公共电子邮箱' }}
          list={Email.List} create={Email.Create} edit={Email.Edit} remove={Delete}
        />
    </Admin>
);

export default App;