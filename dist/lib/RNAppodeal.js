'use strict';
import { NativeModules, NativeEventEmitter } from 'react-native';
const RNAppodeal = NativeModules.RNAppodeal;
const handler = () => { };
const emitter = new NativeEventEmitter(RNAppodeal);
const subscriptions = new Map();
const addEventListener = (event, handler) => {
    let listener = emitter.addListener(event, handler);
    subscriptions.set(handler, listener);
    return { remove: () => removeEventListener(event, handler) };
};
const removeEventListener = (event, handler) => {
    const listener = subscriptions.get(handler);
    listener.remove();
    subscriptions.delete(handler);
};
const removeAllListeners = () => {
    subscriptions.forEach((listener, key, map) => {
        listener.remove();
        map.delete(key);
    });
};
export default Object.assign({}, RNAppodeal, { addEventListener,
    removeEventListener,
    removeAllListeners, initialize: (appKey, adTypes, consent) => {
        consent !== undefined ?
            RNAppodeal.initialize(appKey, adTypes, consent) :
            RNAppodeal.initializeWithConsentReport(appKey, adTypes);
    }, synchroniseConsent: (appKey, handler) => {
        RNAppodeal.synchroniseConsent(appKey, handler);
    }, show: (adTypes, placement, callback = handler) => {
        RNAppodeal.show(adTypes, placement, callback);
    }, isLoaded: (adTypes, callback = handler) => {
        RNAppodeal.isLoaded(adTypes, callback);
    }, canShow: (adTypes, placement, callback = handler) => {
        RNAppodeal.canShow(adTypes, placement, callback);
    }, cache: (adTypes) => {
        RNAppodeal.cache(adTypes);
    }, hide: (adTypes) => {
        RNAppodeal.hide(adTypes);
    }, setAutoCache: (adTypes, value) => {
        RNAppodeal.setAutoCache(adTypes, value);
    }, isPrecache: (adTypes, callback = handler) => {
        RNAppodeal.isPrecache(adTypes, callback);
    }, setTabletBanners: (value) => {
        RNAppodeal.setTabletBanners(value);
    }, setSmartBanners: (value) => {
        RNAppodeal.setSmartBanners(value);
    }, setBannerAnimation: (value) => {
        RNAppodeal.setBannerAnimation(value);
    }, setBannerBackground: (value) => {
        RNAppodeal.setBannerBackground(value);
    }, updateConsent: (value) => {
        RNAppodeal.updateConsent(value);
    }, forceShowConsentDialog: (callback = handler) => {
        RNAppodeal.forceShowConsentDialog(callback);
    }, setTesting: (value) => {
        RNAppodeal.setTesting(value);
    }, setLogLevel: (value) => {
        RNAppodeal.setLogLevel(value);
    }, setChildDirectedTreatment: (value) => {
        RNAppodeal.setChildDirectedTreatment(value);
    }, setOnLoadedTriggerBoth: (value) => {
        RNAppodeal.setOnLoadedTriggerBoth(value);
    }, disableNetwork: (network, adTypes) => {
        RNAppodeal.disableNetwork(network, adTypes);
    }, getVersion: (callback = handler) => {
        RNAppodeal.getVersion(callback);
    }, setSegmentFilter: (filter) => {
        RNAppodeal.setSegmentFilter(filter);
    }, setExtras: (extras) => {
        RNAppodeal.setExtras(extras);
    }, trackInAppPurchase: (amount, currency) => {
        RNAppodeal.trackInAppPurchase(amount, currency);
    }, getRewardParameters: (placement, callback = handler) => {
        RNAppodeal.getRewardParameters(placement, callback);
    }, predictedEcpm: (adType, callback = handler) => {
        RNAppodeal.predictedEcpm(adType, callback);
    }, setAge: (age) => {
        RNAppodeal.setAge(age);
    }, setGender: (gender) => {
        RNAppodeal.setGender(gender);
    }, setUserId: (id) => {
        RNAppodeal.setUserId(id);
    }, hasConsent: (vendor, callback = handler) => {
        RNAppodeal.hasConsent(vendor, callback);
    }, muteVideosIfCallsMuted: (value) => {
        RNAppodeal.muteVideosIfCallsMuted(value);
    }, showTestScreen: () => {
        RNAppodeal.showTestScreen();
    }, setSharedAdsInstanceAcrossActivities: (value) => {
        RNAppodeal.setSharedAdsInstanceAcrossActivities(value);
    } });
