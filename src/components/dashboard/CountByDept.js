import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class CountByDept extends Component {
  state = {  }
  render() {
    const { countByDept } = this.props;
    if (!countByDept) return null;

    return (
      <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
          <TableRow>
            <TableHeaderColumn>单位名称</TableHeaderColumn>
            <TableHeaderColumn>网站及应用系统</TableHeaderColumn>
            <TableHeaderColumn>微信公众号</TableHeaderColumn>
            <TableHeaderColumn>微博账号</TableHeaderColumn>
            <TableHeaderColumn>公共电子邮箱</TableHeaderColumn>
            <TableHeaderColumn>安全责任书</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} >
          {
            countByDept.map(({dept, ...other}) => (
              <TableRow key={dept.id} >
                <TableRowColumn>{dept.name}</TableRowColumn>
                <TableRowColumn>{other.websites}</TableRowColumn>
                <TableRowColumn>{other.wechatOfficialAccounts}</TableRowColumn>
                <TableRowColumn>{other.weiboAccounts}</TableRowColumn>
                <TableRowColumn>{other.emails}</TableRowColumn>
                <TableRowColumn>{other.aqzr}</TableRowColumn>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    );
  }
}

export default CountByDept;