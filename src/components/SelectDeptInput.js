import React, { Component } from 'react';
import { ReferenceInput, SelectInput } from 'admin-on-rest';

class SelectDeptInput extends Component {
  state = {  }
  render() {
    // if (!this.props.input) return <div/>;
    return (
      // <div>TESt</div>
      <ReferenceInput label="test" source="dept.id2" reference="departments" allowEmpty>
        <SelectInput optionText={this.props.optionText} validate={this.props.validate} />
      </ReferenceInput>
    );
  }
}

export default SelectDeptInput;