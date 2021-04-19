import { DeviceStyle } from './deviceStyle';

export const DesktopStyle:DeviceStyle = {
  viewport: {
    height: '100vh',
  },
  stackDirection: 'row',
  buttonLabel: true,
  controlBar: {
    viewport: {
      height: '100%',
      overflowY: 'scroll',
      overflowX: 'hidden',
      minWidth: '16.5rem',
      maxWidth: '16.5rem',
      backgroundColor: 'primary.700', 
    },
    box: {
      direction: 'column' as const,
      backgroundColor: 'primary.700', 
      color: 'whiteAlpha.900',
      padding: '0.25rem',
      spacing: '1rem',
      alignItems: 'start',
    },
    titlebar: {
      width: '100%',
      alignItems: 'center',
      marginBottom: '1rem',
    },
    actionBar: {
      direction: 'column' as const,
      width: '100%',
      spacing : '1rem',
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
      pb: '3.5rem',
      m: '0',
      background: 'white',
      direction: 'column',
      alignItems: 'start',
    },
  },
};