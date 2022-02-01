import { Site, SiteActionTypes } from "./../../types/index";

export const fetchSiteRequest = () => ({
  type: SiteActionTypes.FETCH_SITE,
});

export const fetchSiteSuccess = (payload: Site[]) => ({
  type: SiteActionTypes.FETCH_SITE_SUCCESSS,
  payload,
});
export const fetchSiteError = (payload: string) => ({
  type: SiteActionTypes.FETCH_SITE_ERROR,
  payload,
});
