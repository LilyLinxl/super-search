import SimpleSearch from './SimpleSearch';
import AdvancedSearch from './AdvancedSearch';

export interface SearchBaseProps {
  className?: string;
  style?: React.CSSProperties;
}

type AdvancedSearchType = typeof AdvancedSearch;
interface Search extends AdvancedSearchType {
  SimpleSearch: typeof SimpleSearch;
  AdvancedSearch: AdvancedSearchType;
}

const Search: Search = AdvancedSearch as Search;

Search.SimpleSearch = SimpleSearch;
Search.AdvancedSearch = AdvancedSearch;

export default Search;
