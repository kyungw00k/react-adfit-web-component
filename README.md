# Adfit Ad React Component

## Installation
`TODO`

## Usage

Add React component directly

```
import React from 'react';
import AdfitWebComponent from 'react-adfit-web-component'

Class IntegratedAdfitComponrnt extends React.Component{
...bla

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

or using config Object

```
import React from 'react';
import AdfitWebComponent from 'react-adfit-web-component'

Class IntegratedAdfitComponrnt extends React.Component{
...bla

    render() {
        // You can use also React component properties(eg. this.props...) or constant variable Object 
        let configObject = {
            adType: 'xxx',
            adUnit: 'xxx',
            adWidth: 'xxx',
            addHeight: 'xxx'
        };

        return (
            <AdfitWebComponent {...configObject}/>
        );
    }
}

export default IntegratedAdfitComponent;
```
