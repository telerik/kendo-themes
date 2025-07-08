import { classNames } from '../misc';
import { InputInnerInput } from '../input';

import { KendoComponent } from '../_types/component';
export const SEARCHBAR_CLASSNAME = `k-searchbar`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoSearchBarProps = {
    placeholder?: string;
};

export const SearchBar: KendoComponent<KendoSearchBarProps & React.HTMLAttributes<HTMLSpanElement>> = (
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
SearchBar.defaultOptions = defaultOptions;

export default SearchBar;
