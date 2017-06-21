import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import {  required, BooleanInput, NumberInput, TextInput } from 'admin-on-rest';

class WgxxInput extends Component {
  state = {  }
  render() {
    return (
      <Card>
        <CardHeader
          title="违规信息检查及处理结果"
        />
        <CardText>
          <BooleanInput {...this.props} source="pre_jcjg.wgxx.sfy" label="是否有违规信息" validate={[ required ]} />
        </CardText>
      </Card>
    );
  }
}

export default WgxxInput;