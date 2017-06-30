export const apiHost = process.env.REACT_APP_API_HOST || 'http://local.com:4000';

export const logoutUrl = process.env.REACT_APP_LOGOUT_URL || `${apiHost}/auth/logout`;