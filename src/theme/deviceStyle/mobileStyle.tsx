import { DeviceStyle } from './deviceStyle';

export const MobileStyle:DeviceStyle = {
  viewport: {
    height: '100vh',
    spacing: '0',
  },
  stackDirection: 'column',
  buttonLabel: false,
  controlBar: {
    viewport: {

    },
    box: {
      direction: 'row' as const,
      position: 'fixed' as const,
      zIndex: '1',
      bottom: '0', 
      width: '100%',
      p: '0.25rem',
      backgroundColor: 'primary.700', 
      color: 'whiteAlpha.900',
    },
    titlebar: {
      width: '100%',
      alignItems: 'center',
    },
    actionBar: {
      direction: 'row' as const,
    }
  },
  dashboard: {
    viewport: {
      height: '100%',
      overflowY: 'scroll',
      width: '100%',
    },
    box: {

    },
    controls: {
      p: '0.25rem',
      m: '0',
      background: 'primary.50',
      borderBottom: '1px solid lightgray',
    },
    results: {
      p: '0.25rem',
      m: '0',
      background: 'primary.50',
      paddingBottom: '3.5rem',
    },
  },
};