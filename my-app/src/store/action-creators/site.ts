import {
  Site,
  SiteActionTypes,
  SortActionTypes,
  SortSiteActionTypes,
} from "./../../types/index";

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

export const sortRequest = (payload: string) => ({
  type: SortActionTypes.SORT,
  payload,
});
export const sortSucces = (payload: string) => ({
  type: SortActionTypes.SORT_SUCCESSS,
  payload,
});
export const sortError = (payload: string) => ({
  type: SortActionTypes.SORT_SUCCESSS,
  payload,
});
export const sortSiteRequest = (payload: string) => ({
  type: SortSiteActionTypes.SORT_SITE,
  payload,
});
export const sortSiteSucces = (payload: string) => ({
  type: SortSiteActionTypes.SORT_SITE_SUCCESSS,
  payload,
});
export const sortSiteError = (payload: string) => ({
  type: SortSiteActionTypes.SORT_SITE_ERROR,
  payload,
});
