import { classNames } from '../misc';

export const FILTER_LINES_CLASSNAME = 'k-filter-lines';

const states = [];

const options = {};

export type KendoFilterLinesProps = {
    children?: JSX.Element | JSX.Element[];
}

const defaultProps = {};

export const FilterLines = (
    props: KendoFilterLinesProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const { children } = props;

    return (
        <ul className={classNames(FILTER_LINES_CLASSNAME)}>
            {children}
        </ul>
    );
};

FilterLines.states = states;
FilterLines.options = options;
FilterLines.defaultProps = defaultProps;

export default FilterLines;
