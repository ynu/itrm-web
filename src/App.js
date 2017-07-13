import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import chineseMessages from 'aor-language-chinese';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import WechatOAIcon from 'material-ui/svg-icons/av/art-track';
import WeiboIcon from 'material-ui/svg-icons/communication/chat';
import WebsiteIcon from 'material-ui/svg-icons/av/web';
import DepartmentIcon from 'material-ui/svg-icons/social/people';
import AqzrIcon from 'material-ui/svg-icons/action/assignment';

import { WebSite, Department, Wechat, Weibo, Email, Dashboard, Aqzr, RedirectToList } from './components';
import authClient from './authClient';
import restClient from './restClient';
import LogoutButton from './components/LogoutButton';
import Login from './Login';
import { user } from './reducers/auth';

const messages = {
  cn: chineseMessages,
};
const App = () => (
    <Admin
      restClient={restClient}
      locale="cn"
      messages={messages}
      authClient={authClient}
      title="云南大学IT资源管理系统"
      logoutButton={LogoutButton}
      dashboard={Dashboard}
      loginPage={Login}
      customReducers={{ user }}
    >

      <Resource name="departments" options={{ label: '使用单位' }}
        icon={DepartmentIcon}
        list={Department.List} create={Department.Create} remove={Delete} edit={Department.Edit}
        show={Department.Show}
      />
        <Resource name="websites" options={{ label: '网站及应用系统' }}
          icon={WebsiteIcon}
          list={WebSite.List} create={WebSite.Create} remove={Delete} edit={RedirectToList}
        />

        <Resource name="wechatOfficialAccounts" options={{ label: '微信公众号' }}
          icon={WechatOAIcon}
          list={Wechat.List} create={Wechat.Create} edit={RedirectToList} remove={Delete}
        />
        <Resource name="weiboAccounts" options={{ label: '微博账号' }}
          icon={WeiboIcon}
          list={Weibo.List} create={Weibo.Create} edit={RedirectToList} remove={Delete}
        />
        <Resource name="emails" options={{ label: '公共电子邮箱' }}
          icon={EmailIcon}
          list={Email.List} create={Email.Create} edit={RedirectToList} remove={Delete}
        />
        <Resource name="aqzr" options={{ label: '安全责任书' }}
          icon={AqzrIcon}
          list={Aqzr.List} create={Aqzr.Create} remove={Delete} edit={RedirectToList}
        />
        <Resource name="persons" />
        <Resource name="zzjg" />
    </Admin>
);

export default App;
