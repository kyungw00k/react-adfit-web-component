# React Adfit Web Component
A React component to display a AdFit Ad

## Installation
```
npm install --save react-adfit-web-component
```

## Usage

### Add React component directly

```
import React from 'react';
import AdfitWebComponent from 'react-adfit-web-component'

Class IntegratedAdfitComponent extends React.Component {
    render() {
        return (
            <AdfitWebComponent 
             adType="xxx"
             adUnit="xxx"
             adWidth="xxx"
             adHeight="xxx" />
        );
    }
}

export default IntegratedAdfitComponent;
```

### Or using configuration bbject

```
import React from 'react';
import AdfitWebComponent from 'react-adfit-web-component'

Class IntegratedAdfitComponent extends React.Component {
    render() {
        // You can use also React component properties(eg. this.props...) 
        // or constant variable Object 
        let configObject = {
            adType: 'xxx',
            adUnit: 'xxx',
            adWidth: 'xxx',
            adHeight: 'xxx'
        };

        return (
            <AdfitWebComponent {...configObject}/>
        );
    }
}

export default IntegratedAdfitComponent;
```

## Thanks to
[@imazine](https://github.com/imazine)
