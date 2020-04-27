import React from 'react';
import loadScript from '../helper/load-script';

class AdfitWebComponent extends React.Component {

    shouldComponentUpdate() {
        return false;
    }

    componentWillMount() {
        window.adfit || loadScript('https://t1.daumcdn.net/kas/static/ba.min.js', function(){})
    }

    componentDidMount() {
        // console.log(document.getElementById('daumAd'))
        // window.adfit.render()
    }

    componentWillUnmount() {
        window.adfit.destroy(this.props.adUnit)
    }

    render() {
        return (
            <ins className={'kakao_ad_area'}
                 style={{
                     display: 'block',
                     width: '100%'
                 }}
                 data-ad-unit={this.props.adUnit}
                 data-ad-width={this.props.adWidth}
                 data-ad-height={this.props.adHeight}
                 data-ad-test={this.props.adTest || 'N'}
                 data-ad-param-channel={this.props.adParamChannel}
                 data-ad-param-cp={this.props.adParamCp}
                 >
            </ins>);
    }
}




export default AdfitWebComponent;

