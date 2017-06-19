import React from 'react';
import { DisabledInput, SelectInput  } from 'admin-on-rest';

const SelectOrDefaultInput = (props) => {
    const { choices, input, ...other } = props;
    if (choices.length === 1) {
        const props2 = {
            ...other,
            input: {
                ...input,
                value: props.choices[0][props.optionText],
            }
        };
        return <DisabledInput {...props2} />
    } else return <SelectInput {...props} />
};

export default SelectOrDefaultInput;