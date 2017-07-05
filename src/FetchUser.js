import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/auth';
import { apiHost } from './config';

class FetchUser extends Component {
  state = {  }
  async componentDidMount() {
    try {
      console.log('sdfsfdsdfsd')
            const randomHash = Math.round(Math.random() * 1000);
            const response = await fetch(`${apiHost}/auth/user?hash=${randomHash}`, {
                method: 'GET',
                credentials: 'include'
            });
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            const data = await response.json();
            console.log('#######', data);
            this.props.userFetched(data);
        }
        catch (e) {
            alert('系统错误：登录API调用失败，请与系统管理员联系');
        }
  }
  render() {
    console.log('##########')
    return null;
  }
}

export default connect(null, {
  ...actions,
})(FetchUser);