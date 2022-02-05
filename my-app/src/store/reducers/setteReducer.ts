import { SiteState, SiteAction, SiteActionTypes } from "./../../types/index";
const siteState: SiteState = {
  site: [],
  loading: false,
  error: null,
};
export const siteReducer = (
  state = siteState,
  action: SiteAction
): SiteState => {
  switch (action.type) {
    case SiteActionTypes.FETCH_SITE:
      return { loading: true, error: null, site: state.site };
    case SiteActionTypes.FETCH_SITE_SUCCESSS:
      return { ...state, loading: false, site: action.payload, error: null };
    case SiteActionTypes.FETCH_SITE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        site: state.site,
      };

    default:
      return state;
  }
};
