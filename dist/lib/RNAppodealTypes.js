'use strict';
export const AppodealAdType = {
    NONE: 0,
    INTERSTITIAL: 1 << 0,
    BANNER: 1 << 2,
    BANNER_BOTTOM: 1 << 3,
    BANNER_TOP: 1 << 4,
    REWARDED_VIDEO: 1 << 5,
    NON_SKIPPABLE_VIDEO: 1 << 6,
    MREC: 1 << 8.
};
export var AppodealLogLevel;
(function (AppodealLogLevel) {
    AppodealLogLevel["NONE"] = "none";
    AppodealLogLevel["DEBUG"] = "debug";
    AppodealLogLevel["VERBOSE"] = "verbose";
})(AppodealLogLevel || (AppodealLogLevel = {}));
export var AppodealGender;
(function (AppodealGender) {
    AppodealGender["MALE"] = "male";
    AppodealGender["FEMALE"] = "female";
    AppodealGender["OTHER"] = "other";
})(AppodealGender || (AppodealGender = {}));
export var AppodealConsentStatus;
(function (AppodealConsentStatus) {
    AppodealConsentStatus[AppodealConsentStatus["UNKNOWN"] = 0] = "UNKNOWN";
    AppodealConsentStatus[AppodealConsentStatus["NON_PERSONALIZED"] = 1] = "NON_PERSONALIZED";
    AppodealConsentStatus[AppodealConsentStatus["PARTLY_PERSONALIZED"] = 2] = "PARTLY_PERSONALIZED";
    AppodealConsentStatus[AppodealConsentStatus["PERSONALIZED"] = 3] = "PERSONALIZED";
})(AppodealConsentStatus || (AppodealConsentStatus = {}));
export var AppodealConsentRegulation;
(function (AppodealConsentRegulation) {
    AppodealConsentRegulation[AppodealConsentRegulation["UNKNOWN"] = 0] = "UNKNOWN";
    AppodealConsentRegulation[AppodealConsentRegulation["NONE"] = 1] = "NONE";
    AppodealConsentRegulation[AppodealConsentRegulation["GDPR"] = 2] = "GDPR";
    AppodealConsentRegulation[AppodealConsentRegulation["CCPA"] = 3] = "CCPA";
})(AppodealConsentRegulation || (AppodealConsentRegulation = {}));
