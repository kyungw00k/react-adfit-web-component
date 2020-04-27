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
            <ins id={this.props.domId || 'daumAd'}
                 className={'daum_ddn_area'}
                 style={{
                     display: 'block',
                     width: '100%'
                 }}
                 data-ad-imp-url={this.props.adImpUrl}
                 data-ad-type={this.props.adType}
                 data-ad-unit={this.props.adUnit}
                 data-ad-width={this.props.adWidth}
                 data-ad-height={this.props.adHeight}
                 data-ad-param-channel={this.props.adParamChannel}
                 data-ad-param-cp={this.props.adParamCp}
                 >
            </ins>);
    }
}




export default AdfitWebComponent;

