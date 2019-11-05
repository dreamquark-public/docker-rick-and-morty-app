import {
  useLocation,
} from 'react-router-dom';

export function useQueryString() {
  return Object.fromEntries(new URLSearchParams(useLocation().search));
}

export default useQueryString;
