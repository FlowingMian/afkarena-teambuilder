//Source : https://js.plainenglish.io/google-analytics-with-react-router-and-hooks-16d403ddc528

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (
      command: string,
      commandParameter: string,
      additionnalParameters: { 
        [key: string]:unknown;
      }
    ) => void
  }
}

export const useTracking = (
  trackingId: string | undefined = process.env.GA_MEASUREMENT_ID
):void => {
  const { listen } = useHistory();

  useEffect(() => {
    const unlisten = listen((location) => {
      if (!window.gtag) return;
      if (!trackingId) {
        console.log(
          'Tracking not enabled, as `trackingId` was not given and there is no `GA_MEASUREMENT_ID`.'
        );
        return;
      }

      window.gtag('config', trackingId, { page_path: location.pathname, 'anonymize_ip': true });
    });

    return unlisten;
  }, [trackingId, listen]);
};

export const sendSearch = (item_category:string, search_term:string):void => {
  if (!window.gtag) return;
  window.gtag('event', 'search', {
    item_category,
    search_term,
  });
};

export const sendViewItems = (item_category:string, item_ids:Array<string>):void => {
  if (!window.gtag) return;
  window.gtag('event', 'view_item', {
    items: item_ids.map(item_id => ({
      item_category,
      item_id,
    })),
  });
};

export const sendSelectContent = (content_type:string, item_ids:Array<string>):void => {
  if (!window.gtag) return;
  window.gtag('event', 'select_content', {
    items: item_ids.map(item_id => ({
      content_type,
      item_id,
    })),
  });
};