import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/auth';
import { apiHost } from './config';

class FetchUser extends Component {
  state = {  }
  async getUser () {
    const {user} = this.props;
    if (user && user.id) return;
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
        this.props.userFetched(data);
    }
    catch (e) {
        alert('系统错误：登录API调用失败，请与系统管理员联系');
    }
  }
  async componentDidMount() {
    await this.getUser();
  }
  render() {
    return null;
  }
}
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, {
  ...actions,
})(FetchUser);