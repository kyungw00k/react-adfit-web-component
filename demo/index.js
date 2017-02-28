import React from 'react';
import { render } from 'react-dom';
import AdfitWebComponent from '../src';

const appRoot = document.getElementById('wrap')

render(
    <AdfitWebComponent
        domId="daumAd"
        adImpUrl="http://www.mocky.io/v2/58119fd10f000026070baa94"
        adType="M"
        adUnit="320x100_midas_mobile"
        adWidth="320"
        adHeight="100"
    />, appRoot
);