import {
  SiteState,
  SiteAction,
  SiteActionTypes,
  SortSiteAction,
} from "./../../types/index";
const siteState: SiteState = {
  site: [],
  loading: false,
  error: null,
};
export const siteReducer = (
  state = siteState,
  action: SiteAction | SortSiteAction
): SiteState => {
  switch (action.type) {
    case SiteActionTypes.FETCH_SITE:
      return { loading: true, error: null, site: state.site };
    case SiteActionTypes.FETCH_SITE_SUCCESSS:
      return {
        loading: false,
        site: action.payload,
        error: null,
      };
    case SiteActionTypes.FETCH_SITE_ERROR:
      return {
        loading: false,
        error: action.payload,
        site: state.site,
      };

    default:
      return state;
  }
};
