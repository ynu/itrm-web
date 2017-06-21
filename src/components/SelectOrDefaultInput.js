import React from 'react';
import { DisabledInput, SelectInput, TextInput  } from 'admin-on-rest';

const SelectOrDefaultInput = (props) => {
    return <SelectInput {...props} />
    // const { choices, input, ...other } = props;
    // if (choices.length === 1) {
    //     const props2 = {
    //         ...other,
    //         input: {
    //             ...input,
    //             value: props.choices[0][props.optionText],
    //         }
    //     };
    //     return <TextInput {...props2} diabled={true} />
    // } else return <SelectInput {...props} />
};

export default SelectOrDefaultInput;