# :dollar: React [AdFit 광고](http://adfitinfo.biz.daum.net/) 컴포넌트
> React로 손쉽게 AdFit 광고를 넣어보자!

## 설치
```sh
$ npm install --save react-adfit-web-component
```

## 사용법

```js
import React from 'react';
import AdfitWebComponent from 'react-adfit-web-component'

class IntegratedAdfitComponent extends React.Component {
    render() {
        return (
            <AdfitWebComponent
             adUnit="DAN-Xxxxxxxx"
            />
        );
    }
}

export default IntegratedAdfitComponent;
```

## License
MIT

## Thanks to
[@imazine](https://github.com/imazine)
