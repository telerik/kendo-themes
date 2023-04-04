import { classNames } from '../utils-new';
import { InputInnerInput } from '../input';

export const SEARCHBAR_CLASSNAME = `k-searchbar`;

const states = [];

const options = {};

export type KendoSearchBarProps = {
    placeholder?: string;
};

export const SearchBar = (
    props: KendoSearchBarProps &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        placeholder,
        ...other
    } = props;


    return (
        <span
            {...other}
            className={classNames(props.className, SEARCHBAR_CLASSNAME)}
        >
            <InputInnerInput placeholder={placeholder} />
        </span>
    );
};

SearchBar.states = states;
SearchBar.options = options;
SearchBar.className = SEARCHBAR_CLASSNAME;

export default SearchBar;
