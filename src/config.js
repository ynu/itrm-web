export const apiHost = process.env.REACT_APP_API_HOST || 'http://local.com:4000';

export const logoutUrl = process.env.REACT_APP_LOGOUT_URL || `${apiHost}/auth/logout`;

export const roles = {
  admin: process.env.REACT_APP_ROLES_ADMIN || 'itrm:admin',
  supervisor: process.env.REACT_APP_ROLES_SUPERVISOR || 'itrm:supervisor',
};

export const isAdmin = (userRoles) => {
  if (!userRoles) return false;
  return userRoles.includes(roles.admin);
}

export const isSupervisor = (userRoles) => {
  if (!userRoles) return false;
  return isAdmin(userRoles) || userRoles.includes(roles.supervisor);
}

export const isAdminOrCreator = (user, record) => {
  try {
    return (isAdmin(user.roles) || record.creation.creator.id === user.id);
  } catch (err) {
    return false;
  }
};

export const auditStatus = {
  CREATED: 0, // 刚刚创建
  SYDW_APPROVED: 1, // 使用单位审核通过
  ITC_APPROVED: 101, // 信息技术中心已审核，通过
  ITC_REJECTED: 102, // 信息技术中心已审核，驳回
  isCreated: record => (
    !record.latestAuditLog
    || record.latestAuditLog.status === auditStatus.CREATED
  ),
  isSydwApproved: record => (
    record.latestAuditLog
    && record.latestAuditLog.status === auditStatus.SYDW_APPROVED
  ),
  isItcApproved: record => (
    record.latestAuditLog
    && record.latestAuditLog.status === auditStatus.ITC_APPROVED
  ),
};