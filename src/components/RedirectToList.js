import React from 'react';
import { Redirect } from 'react-router';

export default ({ resource }) => <Redirect to={`/${resource}`} />;