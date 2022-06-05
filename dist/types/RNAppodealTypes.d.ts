export interface AdTypeType {
    readonly NONE: number;
    readonly BANNER: number;
    readonly INTERSTITIAL: number;
    readonly BANNER_BOTTOM: number;
    readonly BANNER_TOP: number;
    readonly REWARDED_VIDEO: number;
    readonly NON_SKIPPABLE_VIDEO: number;
    readonly MREC: number;
}
export declare const AppodealAdType: AdTypeType;
export declare enum AppodealLogLevel {
    NONE = "none",
    DEBUG = "debug",
    VERBOSE = "verbose"
}
export declare enum AppodealGender {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}
export declare enum AppodealConsentStatus {
    UNKNOWN = 0,
    NON_PERSONALIZED = 1,
    PARTLY_PERSONALIZED = 2,
    PERSONALIZED = 3
}
export declare enum AppodealConsentRegulation {
    UNKNOWN = 0,
    NONE = 1,
    GDPR = 2,
    CCPA = 3
}
