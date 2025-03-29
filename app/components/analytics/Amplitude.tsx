import * as amplitude from '@amplitude/analytics-browser';
// import { autocapturePlugin } from '@amplitude/plugin-autocapture-browser';
 
amplitude.init('AMPLITUDE_API_KEY', {
  autocapture: {
    elementInteractions: true
  }
});

