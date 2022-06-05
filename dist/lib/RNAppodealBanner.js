import * as tslib_1 from "tslib";
import React from 'react';
import { requireNativeComponent } from 'react-native';
const RNAppodealBannerView = requireNativeComponent('RNAppodealBannerView');
const AppodealBanner = (props) => {
    const { adSize, placement, usesSmartSizing, onAdLoaded, onAdFailedToLoad, onAdClicked, onAdExpired, style } = props, restProps = tslib_1.__rest(props, ["adSize", "placement", "usesSmartSizing", "onAdLoaded", "onAdFailedToLoad", "onAdClicked", "onAdExpired", "style"]);
    const height = {
        phone: 50,
        tablet: 90,
        mrec: 250
    };
    return (React.createElement(RNAppodealBannerView, Object.assign({ adSize: adSize, onAdLoaded: onAdLoaded, onAdFailedToLoad: onAdFailedToLoad, onAdClicked: onAdClicked, onAdExpired: onAdExpired, placement: placement, usesSmartSizing: usesSmartSizing, style: [style, { height: height[adSize] }] }, restProps)));
};
export default AppodealBanner;
