import React from 'react';
import { render } from 'react-dom';
import AdfitWebComponent from '../src';

const appRoot = document.getElementById('wrap')

render(
    <AdfitWebComponent
        adUnit="DAN-qec5f2maqlpi"
        adWidth="250"
        adHeight="250"
        adTest="Y"
    />, appRoot
);
