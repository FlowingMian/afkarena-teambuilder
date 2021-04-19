import { StackDirection } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { DesktopStyle } from './desktopStyle';
import { MobileStyle } from './mobileStyle';

export type DeviceStyle = {
  viewport: Record<string,unknown>;
  stackDirection: StackDirection;
  buttonLabel:boolean;
  controlBar : {
    viewport: Record<string,unknown>;
    box: Record<string,unknown>;
    titlebar: Record<string,unknown>;
    actionBar: Record<string,unknown>;
  },
  dashboard : {
    viewport: Record<string,unknown>;
    box: Record<string,unknown>;
    controls: Record<string,unknown>;
    results: Record<string,unknown>;
  }
}

const getDeviceStyle:() => DeviceStyle = () => useBreakpointValue({ base: MobileStyle, lg: DesktopStyle }) as DeviceStyle;
export default getDeviceStyle;