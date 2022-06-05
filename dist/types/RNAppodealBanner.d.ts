/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
interface AppodealBannerProps {
    adSize: AdSize;
    placement?: string;
    usesSmartSizing?: boolean;
    onAdLoaded?: Function;
    onAdFailedToLoad?: Function;
    onAdClicked?: Function;
    onAdExpired?: Function;
    style?: StyleProp<ViewStyle>;
}
declare type AdSize = 'phone' | 'tablet' | 'mrec';
declare const AppodealBanner: (props: AppodealBannerProps) => JSX.Element;
export default AppodealBanner;
